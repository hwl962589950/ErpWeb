/*
 * fsLayui - A Front-end Rapid Development Framework.
 * Copyright (C) 2017-2019 wueasy.com

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/**
 * 按钮拓展配置
 * @author: fallsea
 * @version 2.3.1
 */
layui.define(['fsConfig'], function (exports) {

	var fsConfig = layui.fsConfig,
	statusName = $.result(fsConfig,"global.result.statusName","errorNo"),
	msgName = $.result(fsConfig,"global.result.msgName","errorInfo"),
	dataName = $.result(fsConfig,"global.result.dataName","results.data"),
	successNo = $.result(fsConfig,"global.result.successNo","0"),
	FsButtonCommon = function (){

	};


	FsButtonCommon.prototype.test = function(elem,data,datagrid,fsCommon){
		alert("测试自定义按钮"+JSON.stringify(data));
	}

	//取回数据
	FsButtonCommon.prototype.Retrieve= function(elem,data,datagrid,fsCommon){
		var index = parent.layer.getFrameIndex(window.name); //获取窗口索引

		//判断是否有父级窗口
		if(index==undefined)
		{
			return;
		}else
		{
			//判断是否有函数
			if(window.parent.SelectData!=undefined)
			{
				window.parent.SelectData(data);
				parent.layer.close(index);    //关闭弹出层
				
			}else{
				fsCommon.successMsg("父级页面并没有 函数:SelectData ");
			}
			
		}
		
	}

	var fsButtonCommon = new FsButtonCommon();
	exports('fsButtonCommon', fsButtonCommon);
});
