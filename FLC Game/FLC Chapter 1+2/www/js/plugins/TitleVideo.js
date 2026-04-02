//=============================================================================
// TitleVideo.js v1.2.0
// https://github.com/nanowizard/rmmv-title-video
//=============================================================================

/*
Copyright 2017 Ryan Sivek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*:
 * @plugindesc 视频标题插件
 * @author Ryan Sivek 汉化:硕明云书
 *
 * @param Video Name
 * @text 视频名称（不要带后缀）
 * @desc Filename for the video WITHOUT FILE EXTENSION (.webm, .mp4, etc)
 * @default TitleMovie
 *
 * @param Muted
 * @text 静音
 * @desc Whether video audio should be muted (yes/no)
 * @default no
 *
 * @param Volume
 * @text 音量
 * @desc 视频叠加音量 (0-1)
 * @default 1
 *
 * @param Width
 * @text 宽度
 * @desc Width of the video sprite ("auto", "video", or a positive number)
 * @default auto
 *
 * @param Height
 * @text 高度
 * @desc Height of the video sprite ("auto", "video", or a positive number)
 * @default auto
 *
 * @param X
 * @desc X 标题场景中视频的坐标
 * @default 0
 *
 * @param Y
 * @desc Y coordinate of the video in the title scene
 * @default 0
 *
 * @param Loop
 * @text 循环
 * @desc Whether to loop the video (yes/no)
 * @default yes
 *
 * @param Playback Rate
 * @text 播放率
 * @desc 视频的播放速率 (Default: 1.0)
 * @default 1.0
 *
 * @param Blend Mode
 * @text 混合选项
 * @desc 视频的混合选项。(NORMAL, ADD, MULTIPLY, SCREEN,)（普通、加法、乘法、屏幕等）
 * @default NORMAL
 *
 * @param Opacity
 * @text 不透明度
 * @desc Opacity for the video sprite. (0.0 - 1.0)
 * @default 1.0
 *
 * @param Tint
 * @text 进制值
 * @desc 视频精灵的色调为十六进制值。 (Default: 0xffffff)
 * @default 0xffffff
 *
 * @param Loop Start
 * @text 循环开始
 * @desc 是时候开始视频循环了。 (Default: 0)
 * @default 0
 *
 * @param Loop End
 * @text 循环结束
 * @desc 是时候停止视频循环了("end" or a number)
 * @default end
 *
 * @param Debug
 * @desc 将此设置为“是”以将调试语句打印到控制台 (F8 during gameplay)
 * @default no
 *
 * @help
 *
 * 将目标平台的视频文件放入项目的
 * “movies”目录，这个插件会自动选择视频
 * 使用 RMMV 用于确定视频兼容性的相同标准的文件
 * 在当前平台上。
 *
 * 确保视频名称参数的文件名不带扩展名。为了
 * 例如，如果您的电影文件夹中有一个名为“TitleMovie.webm”的视频，
 * 视频名称参数应设置为“TitleMovie”。
 *
 * 目前支持的 RMMV 电影格式为 .webm 和 .mp4。所以对于宽
 * 分发你应该包括这两种文件类型。
 *
 * 宽度和高度可以设置为“自动”（窗口尺寸）、“视频”
 *（原始视频尺寸）或特定数字。
 *
 * 对于播放速率，介于 0 和 1 之间的值会导致视频以
 * 慢动作。大于 1 的值以快进方式播放。
 *
 * 有关兼容的混合模式，请参阅 PIXI.js 文档：
 * http://pixijs.download/dev/docs/PIXI.html#.BLEND_MODES
 *
 * 如果您想查看十六进制颜色样本，请参阅 http://www.color-hex.com/
 * 修改视频精灵的色调
 */

(function() {
    var parameters = PluginManager.parameters('TitleVideo');
    var filepath = parameters['Video Name'];
    var muted = parameters.Muted;
    var volume = parameters.Volume;
    var w = parameters.Width;
    var h = parameters.Height;
    var x = parameters.X;
    var y = parameters.Y;
    var loop = parameters.Loop;
    var playbackRate = parameters['Playback Rate'];
    var blendMode = parameters['Blend Mode'];
    var opacity = parameters.Opacity;
    var tint = parameters.Tint;
    var loopStart = parameters['Loop Start'];
    var loopEnd = parameters['Loop End'];
    var DEBUG = parameters.Debug === 'yes' ? true : false;

    var ST_createBackground = Scene_Title.prototype.createBackground;
    var ST_terminate = Scene_Title.prototype.terminate;
    var WA_setMasterVolume = WebAudio.setMasterVolume;

    var listeners = {};

    var vidSprite, vid;

    Scene_Title.prototype.createBackground = function() {
        ST_createBackground.call(this);

        if(DEBUG) console.log('TitleVideo parameters:', parameters);

        var ext = Game_Interpreter.prototype.videoFileExt();
        var vidFilePath = 'movies/'+ filepath + ext;

        if(DEBUG) console.log('Loading video as texture:', vidFilePath);
        var vidTexture = PIXI.Texture.fromVideo(vidFilePath);

        vid = vidTexture.baseTexture.source;
        vidSprite = new PIXI.Sprite(vidTexture);

        vid.volume = volume*WebAudio._masterVolume;

        vidSprite.blendMode = PIXI.BLEND_MODES[blendMode.toUpperCase()] || PIXI.BLEND_MODES.NORMAL;

        vid.addEventListener('loadedmetadata', function() {
            if(DEBUG) console.log('Successfully loaded video metadata:');
            if(w === 'video') {
                vidSprite.width = vid.videoWidth;
            }
            if(h === 'video') {
                vidSprite.height = vid.videoHeight;
            }
            if(loopEnd === 'end') {
                loopEnd = vid.duration;
            }
        });

        window.vid = vid;

        vidSprite.width = w === 'auto' ? Graphics.width : (parseInt(w) || Graphics.width);
        vidSprite.height = h === 'auto' ? Graphics.height : (parseInt(h) || Graphics.height);
        vidSprite.x = parseInt(x) || 0;
        vidSprite.y = parseInt(y) || 0;
        vidSprite.alpha = parseFloat(opacity) || 1.0;
        vidSprite.tint = parseInt(tint) || 0xffffff;

        vid.loop = loop === 'no' ? false : true;
        vid.muted = muted === 'yes' ? true : false;
        vid.playbackRate = parseFloat(playbackRate) || 1.0;

        vidSprite.update = function() {
            vidTexture.update();
        };

        if(loop){
            loopStart = parseFloat(loopStart);
            if(loopEnd !== 'end'){
                loopEnd = parseFloat(loopEnd);
            }
            if(loopStart > 0 || loopEnd !== vid.duration) {
                vid.loop = false;
                addListener('timeupdate', doCustomLoop);

                if(DEBUG) console.log('Setting up custom loop from %s to %s:', loopStart.toFixed(3), loopEnd);
            }
        }
        else {
            vid.addEventListener('ended', function() {
                vidSprite.visible = false;
            });
        }

        if(DEBUG){
            vid.addEventListener('error', function() {
                console.error('video element error:', vid.error);
            });
        }

        this.addChild(vidSprite);
    };

    WebAudio.setMasterVolume = function(value) {
        if(DEBUG) console.log('Setting video volume: ', value);
        if(vid) vid.volume = volume*value;
        WA_setMasterVolume(value);
    }

    Scene_Title.prototype.terminate = function() {
        ST_terminate.call(this);
        vidSprite.destroy(true);

        removeListeners();
        vid.pause();
        vid.remove();
        vid = null;
        vidSprite = null
        WebAudio.setMasterVolume = WA_setMasterVolume;
    };

    function doCustomLoop() {
        if(DEBUG) console.log('Time update:', vid.currentTime);
        if(vid.currentTime >= loopEnd){
            if(DEBUG) console.log('Looping back to ', loopStart);
            vid.currentTime = loopStart;
            vid.play();
        }
    }

    function addListener(evt, fn){
        vid.addEventListener(evt, fn);

        if(!listeners[evt]){
            listeners[evt] = [];
        }
        listeners[evt].push(fn);
    }

    function removeListeners() {
        Object.keys(listeners).forEach(function(evt){
            listeners[evt].forEach(function(fn){
                vid.removeEventListener(evt, fn);
            });
        });
    }

})();