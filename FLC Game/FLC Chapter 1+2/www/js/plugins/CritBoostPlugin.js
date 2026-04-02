(() => {
    // 检查装备备注是否包含<CritBoost>
    const hasCritBoost = (actor) => {
        return actor.equips().some(item => item && item.meta.CritBoost);
    };

    // 检查技能是否可以暴击（例如，通过技能备注判断）
    const isCritDisabled = (skill) => {
        return skill && skill.meta.NoCrit;  // 如果技能备注包含 <NoCrit>，则表示该技能不可暴击
    };

    // 修改暴击率计算逻辑
    const _Game_Action_itemCri = Game_Action.prototype.itemCri;
    Game_Action.prototype.itemCri = function(target) {
        let baseCri = _Game_Action_itemCri.call(this, target);

        if (this.subject().isActor() && hasCritBoost(this.subject())) {
            const userHp = this.subject().hp;
            const targetHp = target.hp;

            // 检查技能是否不可暴击
            if (isCritDisabled(this.item())) {
                return baseCri;  // 如果技能不可暴击，返回原始暴击率
            }

            // 增加暴击率的逻辑
            const hpDifference = Math.abs(targetHp - userHp);  // 计算目标与用户的HP差异
            const critBoost = Math.floor(hpDifference / 100);  // 每相差100提高1%的暴击率
            baseCri += critBoost * 0.01;  // 增加暴击率
        }

        return baseCri;
    };
})();