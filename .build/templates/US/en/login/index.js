(function(){dust.register("login/index",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layouts/master-auth",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"container\"><form id=\"loginForm\" method=\"post\" role=\"form\" class=\"form-signin\"><h2 class=\"form-signin-heading\">Login to Kurama</h2>").exists(ctx.get(["messages"], false),ctx,{"block":body_2},null).write("<div class=\"form-group\"><input id=\"username\" name=\"username\" type=\"text\" autofocus=\"\" required=\"\" placeholder=\"User name\" class=\"form-control\"/></div><div class=\"form-group\"><input id=\"password\" name=\"password\" type=\"password\" required=\"\" placeholder=\"Password\" class=\"form-control\"/></div><input type=\"submit\" value=\"Login\" class=\"btn btn-lg btn-primary btn-block\"/><input type=\"hidden\" name=\"_csrf\" value=\"").reference(ctx.get(["_csrf"], false),ctx,"h").write("\"/></form></div>");}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<ul>").section(ctx.get(["messages"], false),ctx,{"block":body_3},null).write("</ul>");}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li><i class=\"glyphicon glyphicon-warning-sign\"></i>&nbsp;").reference(ctx.getPath(true, []),ctx,"h").write("</li>");}return body_0;})();