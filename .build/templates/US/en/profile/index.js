(function(){dust.register("profile/index",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layouts/master",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<h1>Hello, ").reference(ctx.get(["name"], false),ctx,"h").write("!</h1><p>You are <strong>").reference(ctx.getPath(false, ["user","name"]),ctx,"h").write("</strong> and your role is <strong>").reference(ctx.getPath(false, ["user","role"]),ctx,"h").write("</strong></p><div class=\"\" data-ng-controller=\"profile-controller\"><form class=\"form-horizontal\" role=\"form\"><div class=\"form-group\"><label>{{}}</label><input type=\"text\" data-ng-model=\"name\" placeholder=\"name\"></div></form></div>");}return body_0;})();