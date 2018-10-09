# cc-inspector+插件异常说明

## 构建过程中,提示不支持加密
在构建选项里面选择**加密脚本**功能,就会导致该问题

要剔除插件脚本,就需要修改src/settings.js,而creator在加密过程前后,均为暴露相关接口,所以无法对settings.js作出修改

目前给出的解决方案为,手动移除插件,再次进行构建即可

## 构建过程中,提示剔除插件脚本发生错误
要剔除插件脚本,就需要修改src/settings.js,如果构建后,没有发现构建目录中包含该文件,那么就会产生该错误!

目前给出的解决方案为,仔细排查构建后的项目文件,如果还是不行,请联系插件作者,如果急需解决,手动移除插件,再次进行构建即可

