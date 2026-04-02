(function () {
    let moveSwitchEnabled = false;
    let focusedSequence = null; // 当前专注的检测序列

    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'EnableMoveSwitch') {
            moveSwitchEnabled = true;
            focusedSequence = null; // 重置专注状态
        } else if (command === 'DisableMoveSwitch') {
            moveSwitchEnabled = false;
        }
    };

    const moveCheck = {
        sequence1: { horizontalMoveCount: 0, verticalMoveCount: 0, currentStep: 1, lastDirection: null },
        sequence2: { horizontalMoveCount: 0, verticalMoveCount: 0, currentStep: 1, lastDirection: null },
        resetSequence: function (sequence) {
            sequence.horizontalMoveCount = 0;
            sequence.verticalMoveCount = 0;
            sequence.currentStep = 1;
            sequence.lastDirection = null;
        },
        resetAll: function () {
            $gameSwitches.setValue(136, false);
            $gameSwitches.setValue(137, false);
            $gameSwitches.setValue(138, false);
            $gameSwitches.setValue(139, false);
            this.resetSequence(this.sequence1);
            this.resetSequence(this.sequence2);
            focusedSequence = null;
        },
        checkMovement: function () {
            if (!moveSwitchEnabled) return;

            const direction = $gamePlayer.direction();

            if (focusedSequence) {
                // 仅检测专注的序列
                const result = this.updateSequence(
                    focusedSequence,
                    focusedSequence === this.sequence1 ? [4, 6] : [2, 8],
                    focusedSequence === this.sequence1 ? [2, 8] : [4, 6],
                    [136, 137, 138, 139]
                );
                if (!result) this.resetAll();
            } else {
                // 同时检测两个序列
                const sequence1Result = this.updateSequence(this.sequence1, [4, 6], [2, 8], [136, 137, 138, 139]);
                const sequence2Result = this.updateSequence(this.sequence2, [2, 8], [4, 6], [136, 137, 138, 139]);

                if (sequence1Result && this.sequence1.currentStep > 2) {
                    focusedSequence = this.sequence1; // 专注于 sequence1
                } else if (sequence2Result && this.sequence2.currentStep > 2) {
                    focusedSequence = this.sequence2; // 专注于 sequence2
                }

                if (!sequence1Result && !sequence2Result) this.resetAll();
            }
        },
        updateSequence: function (sequence, horizontalDirs, verticalDirs, switches) {
            const direction = $gamePlayer.direction();
            const isHorizontal = horizontalDirs.includes(direction);
            const isVertical = verticalDirs.includes(direction);

            // 检测回头行为
            const isBacktracking =
                (sequence.lastDirection === 4 && direction === 6) || // 左 -> 右
                (sequence.lastDirection === 6 && direction === 4) || // 右 -> 左
                (sequence.lastDirection === 2 && direction === 8) || // 下 -> 上
                (sequence.lastDirection === 8 && direction === 2); // 上 -> 下

            if (isBacktracking) {
                this.resetSequence(sequence);
                // 检查是否启用了开关136，并激活开关140
                if ($gameSwitches.value(136)) {
                    $gameSwitches.setValue(140, true);
                }
                return false;
            }

            if (!sequence.lastDirection && (isHorizontal || isVertical)) {
                sequence.lastDirection = direction;
            }

            if (
                (sequence.currentStep % 2 === 1 && !isHorizontal) || // 步骤1、3要求水平移动
                (sequence.currentStep % 2 === 0 && !isVertical) // 步骤2、4要求垂直移动
            ) {
                this.resetSequence(sequence);
                // 检查是否启用了开关136，并激活开关140
                if ($gameSwitches.value(136)) {
                    $gameSwitches.setValue(140, true);
                }
                return false;
            }

            if (isHorizontal) {
                sequence.horizontalMoveCount = sequence.lastDirection === direction ? sequence.horizontalMoveCount + 1 : 1;
                sequence.verticalMoveCount = 0;
            } else if (isVertical) {
                sequence.verticalMoveCount = sequence.lastDirection === direction ? sequence.verticalMoveCount + 1 : 1;
                sequence.horizontalMoveCount = 0;
            }
            sequence.lastDirection = direction;

            if (sequence.horizontalMoveCount > 7 || sequence.verticalMoveCount > 7) {
                this.resetSequence(sequence);
                // 检查是否启用了开关136，并激活开关140
                if ($gameSwitches.value(136)) {
                    $gameSwitches.setValue(140, true);
                }
                return false;
            }

            if (sequence.currentStep === 1 && sequence.horizontalMoveCount === 7) {
                $gameSwitches.setValue(switches[0], true);
                sequence.currentStep = 2;
            } else if (sequence.currentStep === 2 && sequence.verticalMoveCount === 7) {
                $gameSwitches.setValue(switches[1], true);
                sequence.currentStep = 3;
            } else if (sequence.currentStep === 3 && sequence.horizontalMoveCount === 7) {
                $gameSwitches.setValue(switches[2], true);
                sequence.currentStep = 4;
            } else if (sequence.currentStep === 4 && sequence.verticalMoveCount === 7) {
                $gameSwitches.setValue(switches[3], true);
                moveSwitchEnabled = false; // 停止检测
            }

            return true;
        }
    };

    Game_Interpreter.prototype.isMoveSwitchEnabled = function () {
        return moveSwitchEnabled; // 返回 moveSwitchEnabled 的值
    };

    const _Game_Player_moveStraight = Game_Player.prototype.moveStraight;
    Game_Player.prototype.moveStraight = function (d) {
        const lastX = this.x;
        const lastY = this.y;
        _Game_Player_moveStraight.call(this, d);
        if (this.x !== lastX || this.y !== lastY) {
            moveCheck.checkMovement();
        }
    };

    // 检查玩家是否在地图106并装备了13号武器
    const _Game_Map_setup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _Game_Map_setup.call(this, mapId);
    
        if (mapId === 106) {
            const equippedWeapon = $gameParty.leader().equips()[0]; // 获取玩家装备的第一个武器
            if (equippedWeapon && equippedWeapon.id === 13) {
                moveSwitchEnabled = true; // 启用插件
            } else {
                moveSwitchEnabled = false; // 禁用插件
                $gameSwitches.setValue(136, false); // 关闭开关136
                $gameSwitches.setValue(137, false); // 关闭其他相关开关
                $gameSwitches.setValue(138, false); // 关闭其他相关开关
                $gameSwitches.setValue(140, false); // 关闭开关140
            }
        }
    };

})();