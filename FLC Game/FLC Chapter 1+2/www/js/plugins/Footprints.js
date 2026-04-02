/*:
 * @plugindesc 在人物移动时显示脚印
 * @author CatGPT
 *
 * 该插件采用50起作为脚印事件的ID，存在一定的风险，谨慎使用，后续应优化。
 * @help
 * 这个插件会在玩家角色移动时生成脚印，脚印会在 5 秒内逐渐消失。
 *
 * 插件指令：
 *   DisableFootprints  // 禁用脚印效果
 *   EnableFootprints   // 启用脚印效果
 *   SetFootprintImage 1 // 设置使用第1块大图作为脚印图
 */

(function () {
    const _Game_CharacterBase_update = Game_CharacterBase.prototype.update;

    let footprintsEnabled = false; // 是否启用脚印功能
    let footprintImages = [0]; // 默认脚印图像索引为第1张
    const footprintManager = {
        events: [],
        nextId: 50, // 从一个高值（比如10000）开始，避免与普通事件 ID 冲突
        add(event) {
            this.events.push(event);
        },
        remove(eventId) {
            this.events = this.events.filter(event => event.eventId !== eventId);
        },
        clear() {
            this.events.forEach(event => {
                const eventId = event.eventId;
                $gameMap._events[eventId] = null;
                $dataMap.events[eventId] = null;
            });
            this.events = [];
        },
    };

    // 保存脚印状态到 $gameSystem
    const _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function () {
        _Game_System_initialize.call(this);
        this._footprintsEnabled = false; // 默认脚印功能关闭
        this._footprintImages = [0];    // 默认使用第1张图像
    };

    Game_System.prototype.isFootprintsEnabled = function () {
        return this._footprintsEnabled;
    };

    Game_System.prototype.setFootprintsEnabled = function (enabled) {
        this._footprintsEnabled = enabled;
    };

    Game_System.prototype.getFootprintImages = function () {
        return this._footprintImages;
    };

    Game_System.prototype.setFootprintImages = function (images) {
        this._footprintImages = images;
    };

    // 在地图上创建脚印事件
    function createFootprintEvent(mapX, mapY, direction) {
        if (!footprintsEnabled || footprintImages.length === 0) return;

        const eventId = footprintManager.nextId++;
        const randomIndex = Math.floor(Math.random() * footprintImages.length);
        const selectedImage = footprintImages[randomIndex];

        const newEvent = {
            id: eventId,
            name: "Footprint",
            note: "",
            pages: [
                {
                    conditions: {},
                    directionFix: true,
                    image: {
                        characterName: "Footprints",
                        characterIndex: selectedImage,
                        direction: direction,
                        pattern: 0,
                        tileId: 0,
                    },
                    moveType: 0,
                    priorityType: 0,
                    trigger: 4,
                    list: [],
                    through: true,
                },
            ],
            x: mapX,
            y: mapY,
        };

        $dataMap.events[eventId] = newEvent;
        const event = new Game_Event($gameMap.mapId(), eventId);
        $gameMap._events[eventId] = event;

        const sprite = new Sprite_Character(event);
        SceneManager._scene._spriteset._tilemap.addChild(sprite);
        sprite.opacity = 255;

        footprintManager.add({ eventId, sprite });

        // 设置消失的渐变逻辑
        let opacity = 255;
        const fadeDuration = 60; // 渐变消失的时间 (1秒)
        const fadeStep = opacity / fadeDuration; // 每一帧减少的透明度

        // 等待4秒后开始渐变消失
        setTimeout(() => {
            // 渐变消失的递归动画
            function fadeOut() {
                if (opacity > 0) {
                    opacity -= fadeStep;
                    sprite.opacity = Math.max(0, Math.floor(opacity)); // 更新透明度
                    requestAnimationFrame(fadeOut); // 使用 requestAnimationFrame 进行平滑过渡
                } else {
                    sprite.opacity = 0; // 最终透明度设为0
                    $gameMap._events[eventId] = null; // 清理事件
                    if (SceneManager._scene && SceneManager._scene._spriteset && SceneManager._scene._spriteset._tilemap) {
                        SceneManager._scene._spriteset._tilemap.removeChild(sprite); // 移除脚印图像
                    }
                    footprintManager.remove(eventId); // 移除脚印事件管理器中的脚印
                }
            }

            fadeOut(); // 启动渐变消失动画
        }, 4000); // 等待 4 秒后执行渐变消失
    }

    // 重写玩家的 update 方法
    Game_CharacterBase.prototype.update = function () {
        _Game_CharacterBase_update.call(this);

        if (!footprintsEnabled || !(this instanceof Game_Player)) return;

        if (this._prevX !== this.x || this._prevY !== this.y) {
            if (this._prevX !== undefined && this._prevY !== undefined) {
                createFootprintEvent(this._prevX, this._prevY, this._prevDirection);
            }
            this._prevX = this.x;
            this._prevY = this.y;
            this._prevDirection = this.direction();
        }
    };

    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _Scene_Map_start.call(this);

        footprintsEnabled = $gameSystem.isFootprintsEnabled();
        footprintImages = $gameSystem.getFootprintImages();

        const player = $gamePlayer;
        player._prevX = undefined;
        player._prevY = undefined;
        player._prevDirection = undefined;
    };

    // 添加插件指令
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === "DisableFootprints") {
            footprintsEnabled = false;
            $gameSystem.setFootprintsEnabled(false);
            console.log("脚印功能已禁用");
        } else if (command === "EnableFootprints") {
            footprintsEnabled = true;
            $gameSystem.setFootprintsEnabled(true);
            console.log("脚印功能已启用");
        } else if (command === "SetFootprintImage") {
            if (args && args.length > 0) {
                footprintImages = args[0].split(',').map(arg => parseInt(arg.trim()) - 1);
                $gameSystem.setFootprintImages(footprintImages);
                console.log("设置脚印图像索引：", footprintImages);
            } else {
                console.warn("未指定脚印图像索引");
            }
        }
    };

    const _Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function () {
        _Scene_Map_terminate.call(this);
        footprintManager.clear();
    };
})();