(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{530:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件"}},[s._v("#")]),s._v(" 查看文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ls 查看当前目录所有文件\n\nls [-参数]\n-l 显示文件的详细信息\n-s 显示文件大小。\n-t 以时间排序\n-S 以文件大小排序\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"创建与删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建与删除"}},[s._v("#")]),s._v(" 创建与删除")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1、创建文件\ntouch test.txt （touch 创建文件 可以创建多个，文件名空格隔开即可）\nvim test.txt  创建test.txt文本文件， 并进入编辑器，编辑该文本\n\n2、创建文件夹\nmkdir test 在当前目录创建test文件夹\nmkdir a/b  创建文件夹a, 并且再a文件夹下创建b文件夹\n创建文件夹提示permission denied  可以使用 sudo chmod R 777 /home 添加权限    (home为当前文件夹)\n\n3、删除文件、文件夹\nrm demo.txt 删除demo文件\nrmdir test 删除test文件夹 （前提是文件夹为空，里面不能有任何文件，即使是空文件夹也不行）\nrm -r test 可以删除非空文件夹，不管有没有内容\nrm -f demo 强制删除demo文件\nrm -rf test 强制删除文件夹，并且没有提示，(谨慎操作)\n\n4、复制与移动\ncp -r  test tmp  将test文件夹复制到tmp目录下(tmp目录下会存在test文件夹) -r 表示递归复制test下所有文件\ncp -r  test/* tmp  将test文件夹下的内容复制到tmp目录下(tmp目录下只会会存在test下的内容，不会多一层test文件夹)\ncp -r  test/. tmp 同上\ncp -r * ../tmp 在test文件夹下操作，表示把test下的内容 复制到tmp文件夹下\n\nmv test tmp  将test文件夹移动到tmp目录下(tmp目录下会存在test文件夹)\nmv test/* tmp  将test文件夹下的内容移动到tmp目录下(tmp目录下只会会存在test下的内容，不会多一层test文件夹)\nmv test test1 将test文件夹重命名为test1（前提test1在当前目录下不存在）\nmv * ../tmp 在test文件夹下操作，表示把test下的内容 移动到tmp文件夹下\n\n5、查看文件内容\ncat demo  查看当前文件夹下的demo内容， 显示在终端\nhead demo 查看demo的头部内容\nhead 5 demo 查看demo 前5行内容\ntail demo 查看demo的尾部内容\ntail -5 demo 查看demo倒数5行内容\nwc -l demo 查看demo文件有多少行\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("h4",{attrs:{id:"文件的打包-压缩-解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件的打包-压缩-解压"}},[s._v("#")]),s._v(" 文件的打包，压缩，解压")]),s._v(" "),t("p",[s._v("常见的压缩方式有：.zip .rar .gz .bz2 .tar .tag.gz .tar.bz2")]),s._v(" "),t("h5",{attrs:{id:"zip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zip"}},[s._v("#")]),s._v(" zip")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("优点：支持的平台多\n缺点：压缩率不高，tar.gz和tar.bz2在压缩率比较好\n\nzip demo.zip demo  压缩demo文件\nzip big.zip demo a.zip c.txt  压缩多个文件\n\nunzip demo.zip 解压到当前文件夹\nunzip demo.zip -d ./tmp/ 解压到tmp文件夹 （-d指定路径）\nunzip a.zip;unzip.zip 同时解压多个压缩包\nunzip \\*.zip 解压当前下所有的压缩包\n\nunzip -n a.zip (-n 出现同名不覆盖文件，以当前文件为准)\nunzip -o a.zip (-o 出现同名,覆盖文件，以压缩包里面的文件内容为准)\nunzip -l a.zip (只是查看压缩包里面有哪些文件，不解压)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h5",{attrs:{id:"tar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[s._v("#")]),s._v(" tar")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".tar格式  快且耗存小，因为它只是一个打包工具，并不压缩。\n.tar的压缩使用 gzip 或者 bzip2 等其它命令,gzip通常只能处理单个文件，所以一般是选择使用 tar 命令间接的完成解压缩\n\ntar [-参数1][参数f]   （参数1：必选，且一个; 参数f: 最后一个参数，必须）\n-c 压缩\n-x 解压\n-t 查看内容\n-r 向压缩文件末尾追加文件\n-u 更新原压缩包中的文件\n\ntar [-参数1][参数2][参数f] （参数2：可选）\n-z 有gzip属性的\n-j 有bz2属性的\n-Z 有compress属性的\n-v 显示所有过程\n-O 将文件解开到标准输出\n\ntar cf test.tar test  将test文件打包为 名字test.tar的打包文件\ntar xf test.tar -C test1 将test.tar 解压到test1文件夹下\n\ntar czf test.tar.gz test 将test文件打包并使用gzip方式进行压缩\ntar xzf test.tar.gz -C test1 解压\ntar cjf test.tar.bz2 及那个test文件打包并使用bzip2进行压缩\ntar jxf test.tar.gz -C test1 解压\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h4",{attrs:{id:"文件的查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件的查找"}},[s._v("#")]),s._v(" 文件的查找")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1、find  在指定目录下查找\nfind path -name testfile\nfind /  -name nginx\nfind /  -name nginx* #模糊匹配\nfind /  -mmin -20  #最近20分钟内修改的文件\nfind /  -mtime -1  #最近1天内修改的文件\n\n2、locate\nlinux系统每天至少自动扫描一次文件，将结果保存到数据库，locate查的是数据库记录。locate查询比find要快，但最新文件如果在数据库中没有记录,是需要手动更新（updatedb）\nlocate  config.js\n\n3、which\nwhich从环境变量文件（/etc/profile）中的path目录中查找，且which找的都是可执行文件。\nwhich nginx\n\n4、whereis\n与which类似查询可执行文件，whereis查询更多，会查找出相关的man文件\nwhereis nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h4",{attrs:{id:"文本的查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文本的查找"}},[s._v("#")]),s._v(" 文本的查找")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/正则  ?正则\n/test 向后查找文中test 字段\n?test 向前查找\n查找到之后，n 命令查找下一个\n:s/test/TEST 针对当前行 查找到的第一个test字符进行替换为TEST\n:%s/test/TEST 针对整个文本进行查找\n:%s/test/TEST/g 对文本所有的test字段进行替换\n:3,5s/test/TEST 针对第3到5行的字符进行替换\n\n:set nu 显示行号，只对当次生效\n:set nonu 隐藏行号，只对当次生效\n永久生效需要修改 etc/vimrc 配置文件： vim /etc/vimrc 编辑该文件，尾行添加 set nu 然后保存\n\n可视模式：\n小写v 字符可视模式，移动光标选择字符\n大写V 行可视模式，移动光标，选择以行为单位\nctrl + v 块模式，选择一块\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h4",{attrs:{id:"上传文件到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传文件到服务器"}},[s._v("#")]),s._v(" 上传文件到服务器")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本地文件路径 /user/download/a.txt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 远程服务信息 root@192.168.1.10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 远程目标路径 /tmp/test")]),s._v("\nscp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("download"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt  root@"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);