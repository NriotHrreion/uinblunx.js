# UinBlunx.js

By NriotHrreion

## 下载

```cmd
npm i uinblunx
```

## 使用

这是一个方便web开发处理音视频的包, 使用方法也很简单.

### 引入

```html
<script type="text/javascript" src="./js/uinblunx.js"></script>
```

### 示例

[示例代码](./example)

```javascript
var video = document.getElementById("video");
var media = Uin({
    mode: "media", // 模式 (media 或 speech)
    conf: { // 配置信息
        audio: true,
        video: true
    }
    /**
     * mode: "speech",
     * conf: {
     *   lang: "zh-cn"
     * }
     */
});
media.load(function(result) {
    video.srcObject = result;
    video.play();
});
```

## LICENSE

[MIT](./LICENSE)
