/*:
 * @plugindesc Ensures specified enemies take 0 damage during battle actions, compatible with YEP Battle Engine Core and Action Sequence Pack 1. Allows certain skill to break invincibility.
 * @param EnemyIDs
 * @text Enemy IDs
 * @desc The IDs of the enemies that will become invincible. Separate IDs with commas (e.g., 1,4).
 * 
 * @param BreakSkillID
 * @text Break Skill ID
 * @desc The ID of the skill that can break the invincibility.
 * @default 1
 * 
 * @help This plugin ensures the specified enemies take 0 damage during battle actions, unless a specific skill is used to break their invincibility.
 */

(function() {
    // Retrieve plugin parameters
    var parameters = PluginManager.parameters('InvincibleEnemy');
    
    // Read the EnemyIDs parameter
    var enemyIdParam = parameters['EnemyIDs'];
    var breakSkillId = Number(parameters['BreakSkillID']);

    if (!enemyIdParam) {
        console.error("Error: EnemyIDs parameter not found or empty.");
        return;  // Exit if parameter is not set
    }

    // Convert the parameter into an array of numbers
    var invincibleEnemyIds = enemyIdParam.split(',').map(function(id) {
        return Number(id.trim());  // Convert to number
    }).filter(function(id) {
        return !isNaN(id) && id > 0;  // Ensure valid numbers
    });

    // Log the parsed IDs for debugging
    console.log("Parsed Invincible Enemy IDs:", invincibleEnemyIds);

    // Helper function to check if an enemy is invincible
    function isInvincibleEnemy(enemyId) {
        return invincibleEnemyIds.includes(enemyId);
    }

    // Override Game_Action's apply method to prevent damage to invincible enemies
    var _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _Game_Action_apply.call(this, target);

        if (target.isEnemy() && isInvincibleEnemy(target.enemyId())) {
            var result = target.result();
            if (this.item().id === breakSkillId) {
                // Break invincibility
                console.log("Breaking invincibility for enemy ID", target.enemyId());
                invincibleEnemyIds = invincibleEnemyIds.filter(id => id !== target.enemyId());
                // Allow damage to be applied normally
            } else {
                if (result.hpDamage > 0) {
                    console.log("Original damage to enemy ID", target.enemyId(), "was", result.hpDamage);
                    result.hpDamage = 0;  // Set damage to 0
                    console.log("Damage to enemy ID", target.enemyId(), "set to 0.");
                }
            }
        }
    };

    // Override Game_Battler's performDamage method to handle zero damage properly
    var _Game_Battler_performDamage = Game_Battler.prototype.performDamage;
    Game_Battler.prototype.performDamage = function() {
        if (this.isEnemy() && isInvincibleEnemy(this.enemyId())) {
            console.log("Damage to enemy ID", this.enemyId(), "was overridden to 0.");
            return;  // Prevent any damage application
        }
        _Game_Battler_performDamage.call(this);
    };

    // Intercept and prevent all states from being applied to invincible enemies
    var _Game_Battler_addState = Game_Battler.prototype.addState;
    Game_Battler.prototype.addState = function(stateId) {
        if (this.isEnemy() && isInvincibleEnemy(this.enemyId())) {
            console.log("Enemy ID", this.enemyId(), "is immune to state", stateId);
            return;  // Prevent state from being applied
        }
        _Game_Battler_addState.call(this, stateId);  // Apply state normally for non-invincible enemies
    };

    // Additional override for damage calculations in YEP Battle Engine Core
    var _Game_Action_executeDamage = Game_Action.prototype.executeDamage;
    Game_Action.prototype.executeDamage = function(target, value) {
        if (target.isEnemy() && isInvincibleEnemy(target.enemyId()) && this.item().id !== breakSkillId) {
            value = 0;  // Set damage to 0 for invincible enemies
        }
        _Game_Action_executeDamage.call(this, target, value);
    };

})();