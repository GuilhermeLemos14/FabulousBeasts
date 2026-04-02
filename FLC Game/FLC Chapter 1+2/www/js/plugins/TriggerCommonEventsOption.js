/*:
 * @plugindesc Adds an option to the settings menu to trigger common events 1 and 2.
 * @param OptionName
 * @text Option Name
 * @desc The name of the option that will appear in the settings menu.
 * @default Trigger Event
 * @param DefaultValue
 * @text Default Value
 * @desc The default value of the option (true = on, false = off).
 * @default true
 * @help This plugin allows players to toggle an option in the settings menu to trigger common events 1 and 2.
 */

(function() {
    var parameters = PluginManager.parameters('TriggerCommonEventsOption'); // 确保这里的名称与插件文件名匹配
    var optionName = String(parameters['OptionName'] || 'Trigger Event');
    var defaultValue = parameters['DefaultValue'] === 'true';

    ConfigManager.triggerEventOption = defaultValue;

    var ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = ConfigManager_makeData.call(this);
        config.triggerEventOption = this.triggerEventOption;
        return config;
    };

    var ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        ConfigManager_applyData.call(this, config);
        this.triggerEventOption = this.readFlag(config, 'triggerEventOption', defaultValue);
    };

    var Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function() {
        Window_Options_addGeneralOptions.call(this);
        this.addCommand(optionName, 'triggerEventOption');
    };

    var Window_Options_setConfigValue = Window_Options.prototype.setConfigValue;
    Window_Options.prototype.setConfigValue = function(symbol, value) {
        Window_Options_setConfigValue.call(this, symbol, value);
        if (symbol === 'triggerEventOption') {
            ConfigManager.triggerEventOption = value;
            if (value) {
                $gameTemp.reserveCommonEvent(47); // 触发公共事件1
            } else {
                $gameTemp.reserveCommonEvent(48); // 触发公共事件2
            }
        }
    };

    var Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        Scene_Map_update.call(this);
        if ($gameTemp.isCommonEventReserved()) {
            $gameTemp.isCommonEventReserved();
        }
    };
})();