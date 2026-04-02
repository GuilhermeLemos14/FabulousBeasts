/*:
 * @plugindesc Adds a toggle option in the options menu to control a single switch with ID 66.
 * @author GPT
 *
 * @param Option Name
 * @desc The name of the option in the settings menu.
 * @default Custom Switch
 *
 * @help This plugin adds a custom toggle option to the options menu. 
 * When turned ON, Switch 66 will be ON.
 * When turned OFF, Switch 66 will be OFF.
 */

(function() {
    var parameters = PluginManager.parameters('CustomSwitchOption');
    var optionName = String(parameters['Option Name'] || '视频播放');
    var switchId = 66;

    var ConfigManager_customSwitch = true; // 默认设置为打开

    Object.defineProperty(ConfigManager, 'customSwitch', {
        get: function() {
            return ConfigManager_customSwitch;
        },
        set: function(value) {
            ConfigManager_customSwitch = value;
            if ($gameSwitches) {
                $gameSwitches.setValue(switchId, value);
            }
        },
        configurable: true
    });

    var _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = _ConfigManager_makeData.call(this);
        config.customSwitch = this.customSwitch;
        return config;
    };

    var _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.call(this, config);
        this.customSwitch = this.readFlag(config, 'customSwitch');
    };

    var _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function() {
        _Window_Options_addGeneralOptions.call(this);
        this.addCommand(optionName, 'customSwitch');
    };

    var _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.call(this);
        if (ConfigManager.customSwitch === undefined) {
            ConfigManager.customSwitch = true; // 默认设置为打开
        }
        ConfigManager.customSwitch = ConfigManager.customSwitch; // Ensure switches are set correctly on game start
    };

    var _Game_System_onBeforeSave = Game_System.prototype.onBeforeSave;
    Game_System.prototype.onBeforeSave = function() {
        _Game_System_onBeforeSave.call(this);
        ConfigManager.customSwitch = ConfigManager.customSwitch; // Ensure switches are saved correctly
    };
})();