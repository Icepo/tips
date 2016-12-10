# python对报表拆分和识别
## 使用PIL做图像处理

PIL目前不支持py3，故建议使用py2.7

PIL， python image library，是py的图像处理标准库，本次需要用来完成图像切分。

win需要去官网下载安装包exe

使用安装包安装PIL的时候有个坑

http://lihuipeng.blog.51cto.com/3064864/1175356

或者可以使用源码安装（我并没有试）

http://www.crifan.com/python_install_pip_error_python_version_2_7_required_which_was_not_found_in_the_registry/

PIL原生比较旧只支持32位在git上有一个Pillow

https://github.com/python-pillow/Pillow

Pillow不能和PIL共存

Pillow>=1.0不支持import Image，得用from PIL import Image

Pillow>=2.0不支持import _imaging，得用from PIL.Image import core as _imaging