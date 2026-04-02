//=============================================================================
// Drill_LayerGround.js
//=============================================================================

/*:
 * @plugindesc (v1.0) 地图 - 多层动态远景 + 多层动态前景
 * @author Drill_up
 * 
 * @param --远景组 1至20--
 * @default 
 *
 * @param 远景-1
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-2
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-3
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-4
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-5
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-6
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-7
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-8
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-9
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-10
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-11
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-12
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-13
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-14
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-15
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-16
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-17
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-18
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-19
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-20
 * @parent --远景组 1至20--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param --远景组21至40--
 * @default 
 *
 * @param 远景-21
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-22
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-23
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-24
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-25
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-26
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-27
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-28
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-29
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-30
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-31
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-32
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-33
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-34
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-35
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-36
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-37
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-38
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-39
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-40
 * @parent --远景组21至40--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param --远景组41至60--
 * @default 
 *
 * @param 远景-41
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-42
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-43
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-44
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-45
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-46
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-47
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-48
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-49
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-50
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-51
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-52
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-53
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-54
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-55
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-56
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-57
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-58
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-59
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-60
 * @parent --远景组41至60--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param --远景组61至80--
 * @default 
 *
 * @param 远景-61
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-62
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-63
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-64
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-65
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-66
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-67
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-68
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-69
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-70
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-71
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-72
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-73
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-74
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-75
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-76
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-77
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-78
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-79
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 远景-80
 * @parent --远景组61至80--
 * @desc 远景的图片资源。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 * 
 * @help 
 * =============================================================================
 * +++ Drill_LayerGround +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 远景图可以贴上多个图片并作各自的移动效果。（前提是远景图透明）
 * 也可以作为云朵等天气的阴影贴图效果。
 * 【支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 远景图片资源，在远景组中进行配置。（img/parallaxes文件夹）
 * 配置没有固定顺序，可以随机配置在组中。
 * 但是关键字设置要与配置的文件名（参数B）相互匹配！
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 如果要添加远景图层，在 地图注释 中添加：
 * （注意，格式中都没有空格，逗号为英文逗号，冒号为英文冒号）
 *
 * 地图注释：层:A,B,C,D,E,F
 *
 * 参数A：层次类型
 *        low - 图层在图块的下方（远景），
 *        high - 图层在图块、角色上方（前景）
 * 参数B：资源文件
 *        填入文件名，不需要.png后缀
 * 参数C：速度-X轴方向（可以为小数）
 *        正数为向左移动，负数为向右移动。
 * 参数D：速度-Y轴方向（可以为小数）
 *        正数为向上移动，负数为向下移动。
 * 参数E：透视-X
 *        玩家移动时，图层会与玩家位置x方向有一定的偏移。
 * 参数F：透视-Y
 *        玩家移动时，图层会与玩家位置y方向有一定的偏移。
 *        设置10，远景将与玩家纵向移动二分之一的图片距离。
 *        （设置1-5范围内较合适，数值越大，移动越远。）
 *        设置-1，则会强制将图片与镜头y轴方向固定。
 *       （设置-1与 地图远景配置 去掉勾选纵向循环 的效果一样。）
 *
 * 示例：
 * 地图注释：层:low,f层面02,0.5,0.5,0,0
 * 地图注释：层:low,f层面02,1,1,0,0
 * 地图注释：层:low,f层面02,1.5,1.5,0,0
 * （图层的先后顺序与配置的先后有关，最先配置的图层在最靠后位置）
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * v1.2 将覆写变为多继承，使得兼容 TerraxLighting 光照插件。
 * v1.1 修复了与mog的事件头顶文字插件 MOG_EventText 相互冲突的bug。
 * v1.0 完成插件
 */

 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_LayerGround = true;
　　var DrillUp = DrillUp || {}; 

    DrillUp.parameters = PluginManager.parameters('Drill_LayerGround');
	//（这里的变量是根据地图实时获取的）

//=============================================================================
// ** 层信息控制
//=============================================================================

  //--层信息初始化
  var _Game_Map_initialize = Game_Map.prototype.initialize;
  Game_Map.prototype.initialize = function() {
    _Game_Map_initialize.call(this);
    this.initLayerGround();
  };
  Game_Map.prototype.initLayerGround = function(){
    this._LayerGroundDefined = true;
	this._layer_type = [];
	this._layer_name = [];
	this._layer_speedX = [];
	this._layer_speedY = [];
	this._layer_bufferX = [];
	this._layer_bufferY = [];
	this._layer_X = [];
	this._layer_Y = [];
  };

  //--检查初始化定义情况
  Game_Map.prototype.checkLayerGround = function(){
    if(!this._LayerGroundDefined){
      this.initLayerGround();
    }
  };

  //--载入地图注释
  var _Game_Map_setup = Game_Map.prototype.setup;
  Game_Map.prototype.setup = function(mapId) {
    _Game_Map_setup.call(this, mapId);
    this.initLayerGround();
    this.setupForeground();
  };
  Game_Map.prototype.notetags = function() {
	return $dataMap.note.split(/[\r\n]+/);
  };
  Game_Map.prototype.setupForeground = function() {
	var i = 0;
	this.notetags().forEach(function(note) {
		var text_ = note.split(':');
		if( text_[0] === "层"){
			this._map_layer_data = text_[1] || '';
			var s = this._map_layer_data.split(',');
			if( s[0] === "low" ){
				this._layer_type[i] = 0;
			}else{
				this._layer_type[i] = 1;
			}
			this._layer_name[i] = String( s[1] );
			this._layer_speedX[i] = Number( s[2] || 0 );
			this._layer_speedY[i] = Number( s[3] || 0 );
			this._layer_bufferX[i] = Number( s[4] || 0 );
			this._layer_bufferY[i] = Number( s[5] || 0 );
			this._layer_X[i] = 0;
			this._layer_Y[i] = 0;
			i++;
		}
	},this);
  };


  //--获取并修改当前的显示位置
  var _Game_Map_setDisplayPos = Game_Map.prototype.setDisplayPos;
  Game_Map.prototype.setDisplayPos = function(x, y) {
    _Game_Map_setDisplayPos.call(this, x, y);
    this.checkLayerGround();
	for(var i =0; i<this._layer_X.length; i++){
		if (this.isLoopHorizontal()) {
		  this._layer_X[i] = x;
		} else {
		   this._layer_X[i] = this._displayX;
		}
	}
	for(var i =0; i<this._layer_Y.length; i++){
		if (this.isLoopVertical()) {
		  this._layer_Y[i] = y;
		} else {
		  this._layer_Y[i] = this._displayY;
		}
	}
  };
  
  //--与Spriteset_Map传输 资源名 数据
  Game_Map.prototype.layerGroundNameArray = function() {
    this.checkLayerGround();
    return this._layer_name;
  };
  //--与Spriteset_Map传输 层类型 数据
  Game_Map.prototype.layerGroundTypeArray = function() {
    this.checkLayerGround();
    return this._layer_type;
  };
  //--与Spriteset_Map传输 XY位移 数据
  Game_Map.prototype.layerGroundXArray = function() {
    this.checkLayerGround();
	var x_move = [];
	for(var i=0; i<this._layer_X.length; i++){
		if (this._layer_bufferX[i] != -1) {
			x_move[i] = this._layer_X[i] * this.tileWidth() * ((2.0/3.0)+ (1.0/3.0)*(this._layer_bufferX[i] / 10.0));
		} else {
			x_move[i] = 0;
		}
	}
    return x_move;
  };
  Game_Map.prototype.layerGroundYArray = function() {
    this.checkLayerGround();
	var y_move = [];
	for(var i=0; i<this._layer_Y.length; i++){
		if (this._layer_bufferY[i] != -1) {
			y_move[i] = this._layer_Y[i] * this.tileHeight() * ((2.0/3.0)+ (1.0/3.0)*(this._layer_bufferY[i] / 10.0));
		} else {
			y_move[i] = 0;
		}
	}
    return y_move;
  };

  
  //--画面滚动捕获
  var _Game_Map_scrollDown = Game_Map.prototype.scrollDown;	//画面滚动（向下走动）
  Game_Map.prototype.scrollDown = function(distance) {
    var lastY = this._displayY;
    _Game_Map_scrollDown.call(this, distance);
    this.checkLayerGround();
	for(var i =0; i<this._layer_Y.length; i++){
		if (this.isLoopVertical()) {
		  if ( this._layer_bufferY[i] != -1 ) {
			this._layer_Y[i] += distance;
		  }
		} else if (this.height() >= this.screenTileY()) {
		  var displayY = Math.min(lastY + distance,
			this.height() - this.screenTileY());
		  this._layer_Y[i] += displayY - lastY;
		}
	}
  };

  var _Game_Map_scrollLeft = Game_Map.prototype.scrollLeft;	//画面滚动（向左走动）
  Game_Map.prototype.scrollLeft = function(distance) {
    var lastX = this._displayX;
    _Game_Map_scrollLeft.call(this, distance);
    this.checkLayerGround();
	for(var i =0; i<this._layer_X.length; i++){
		if (this.isLoopHorizontal()) {
		  if (this._layer_bufferX[i] != -1 ) {
			this._layer_X[i] -= distance;
		  }
		} else if (this.width() >= this.screenTileX()) {
		  var displayX = Math.max(lastX - distance, 0);
		  this._layer_X[i] += displayX - lastX;
		}
	}
  };

  var _Game_Map_scrollRight = Game_Map.prototype.scrollRight;	//画面滚动（向右走动）
  Game_Map.prototype.scrollRight = function(distance) {
    var lastX = this._displayX;
    _Game_Map_scrollRight.call(this, distance);
    this.checkLayerGround();
	for(var i =0; i<this._layer_X.length; i++){
		if (this.isLoopHorizontal()) {
		  if ( this._layer_bufferX[i] != -1 ) {
			this._layer_X[i] += distance;
		  }
		} else if (this.width() >= this.screenTileX()) {
		  var displayX = Math.min(lastX + distance,
		   this.width() - this.screenTileX());
		  this._layer_X[i] += displayX - lastX;
		}
	}
  };

  var _Game_Map_scrollUp = Game_Map.prototype.scrollUp;		//画面滚动（向上走动）
  Game_Map.prototype.scrollUp = function(distance) {
    var lastY = this._displayY;
    _Game_Map_scrollUp.call(this, distance);
    this.checkLayerGround();
	for(var i =0; i<this._layer_Y.length; i++){
		if (this.isLoopVertical()) {
		  if ( this._layer_bufferY[i] != -1 ) {
			this._layer_Y[i] -= distance;
		  }
		} else if (this.height() >= this.screenTileY()) {
		  var displayY = Math.max(lastY - distance, 0);
		  this._layer_Y[i] += displayY - lastY;
		}
	}
  };


  //--刷新地图坐标值
  var _Game_Map_update = Game_Map.prototype.update;
  Game_Map.prototype.update = function(sceneActive) {
    _Game_Map_update.call(this, sceneActive);
    this.updateLayerGround();
  };

  Game_Map.prototype.updateLayerGround = function() {
    this.checkLayerGround();
	for(var i=0; i<this._layer_speedX.length; i++){
		this._layer_X[i] += this._layer_speedX[i] / this.tileWidth() / 2;
		this._layer_Y[i] += this._layer_speedY[i] / this.tileHeight() / 2;
	}
  };


//=============================================================================
// ** 地图绘制层 控制
//=============================================================================

/*
  var _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
  Spriteset_Map.prototype.createLowerLayer = function() {
	if( $gameMap.layerGroundNameArray().length != 0 ){
		Spriteset_Base.prototype.createLowerLayer.call(this);
		this.createParallax();
		this.createDownLayerGround();	//远景层建立
		this.createTilemap();
		this.createCharacters();
		this.createShadow();
		this.createDestination();
		this.createUpLayerGround();		//前景层建立
		this.createWeather();
		if(Imported.MOG_EventText){		//mog事件头顶文字
			this.create_event_text_field();
		}
	}else{
		_Spriteset_Map_createLowerLayer.call(this);
	}
	
  };
 */
  var _Spriteset_Map_createParallax = Spriteset_Map.prototype.createParallax;
  Spriteset_Map.prototype.createParallax = function() {
		_Spriteset_Map_createParallax.call(this);
		this.createDownLayerGround();	//远景层建立
  }
  var _Spriteset_Map_createDestination = Spriteset_Map.prototype.createDestination;
  Spriteset_Map.prototype.createDestination = function() {
		_Spriteset_Map_createDestination.call(this);
		this.createUpLayerGround();		//前景层建立
  }
  /*
	还是不要通过覆写穿插远景和前景了，直接在插入点抱方法的大腿。
  */

  Spriteset_Map.prototype.createDownLayerGround = function() {		//远景层建立
    var layer_name = $gameMap.layerGroundNameArray();
    var layer_type = $gameMap.layerGroundTypeArray();
	this._layer_ground = [];
	
	for(var i=0; i< layer_name.length; i++){
		this._layer_ground[i] = new TilingSprite();
		this._layer_ground[i].move(0, 0, Graphics.width, Graphics.height);
		this._layer_ground[i].bitmap = ImageManager.loadParallax( layer_name[i] );
		
		if( layer_type[i] == 0){
			this._baseSprite.addChild(this._layer_ground[i]);
		};
	}
  };

  Spriteset_Map.prototype.createUpLayerGround = function() {		//前景层建立
    var layer_type = $gameMap.layerGroundTypeArray();
	for(var i=0; i< layer_type.length; i++){
		if( layer_type[i] == 1){
			this._baseSprite.addChild(this._layer_ground[i]);
		};
	}
  };

  var _Spriteset_Map_update = Spriteset_Map.prototype.update;
  Spriteset_Map.prototype.update = function() {
    _Spriteset_Map_update.call(this);
    this.updateLayerGround();
  };
  
  Spriteset_Map.prototype.updateLayerGround = function() {
	var x_move = $gameMap.layerGroundXArray();
	var y_move = $gameMap.layerGroundYArray();
	
	//alert(x_move);
	for(var i=0; i< x_move.length; i++){
		if (this._layer_ground[i].bitmap) {					//层位置更新
		  this._layer_ground[i].origin.x = x_move[i];
		  this._layer_ground[i].origin.y = y_move[i];
		}
	}
  };

