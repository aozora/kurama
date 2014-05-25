'use strict';
var mongoose = require('mongoose');

// User schema compatible with Ghost v0.4.x
var postSchema = mongoose.Schema({
   uuid:             { type: String, required: true },
   title:            { type: String, required: true },
   slug:             { type: String, required: true },
   html:             String,
   image:            String,
   featured:         Boolean,
   page:             Boolean,
   status:           String,
   language:         String,
   meta_title:       String,
   meta_description: String,
   author_id:        { type: mongoose.Schema.Types.ObjectId, required: true },
   created_at:       Date,
   created_by:       mongoose.Schema.Types.ObjectId,
   updated_at:       Date,
   updated_by:       mongoose.Schema.Types.ObjectId,
   published_at:     Date,
   published_by:     mongoose.Schema.Types.ObjectId
});


module.exports = postSchema;
//
//   "id": 1,
//   "uuid": "907b8d57-fc2d-47a9-a9c2-60b239753518",
//   "title": "Welcome to Ghost",
//   "slug": "welcome-to-ghost",
//   "markdown": "You're live! Nice. We've put together a little post to introduce you to the Ghost editor and get you started. You can manage your content by signing in to the admin area at `<your blog URL>/ghost/`. When you arrive, you can select this post from a list on the left and see a preview of it on the right. Click the little pencil icon at the top of the preview to edit this post and read the next section!\n\n## Getting Started\n\nGhost uses something called Markdown for writing. Essentially, it's a shorthand way to manage your post formatting as you write!\n\nWriting in Markdown is really easy. In the left hand panel of Ghost, you simply write as you normally would. Where appropriate, you can use *shortcuts* to **style** your content. For example, a list:\n\n* Item number one\n* Item number two\n    * A nested item\n* A final item\n\nor with numbers!\n\n1. Remember to buy some milk\n2. Drink the milk\n3. Tweet that I remembered to buy the milk, and drank it\n\n### Links\n\nWant to link to a source? No problem. If you paste in url, like http://ghost.org - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to [the Ghost website](http://ghost.org). Neat.\n\n### What about Images?\n\nImages work too! Already know the URL of the image you want to include in your article? Simply paste it in like this to make it show up:\n\n![The Ghost Logo](https://ghost.org/images/ghost.png)\n\nNot sure which image you want to use yet? That's ok too. Leave yourself a descriptive placeholder and keep writing. Come back later and drag and drop the image in to upload:\n\n![A bowl of bananas]\n\n\n### Quoting\n\nSometimes a link isn't enough, you want to quote someone on what they've said. It was probably very wisdomous. Is wisdomous a word? Find out in a future release when we introduce spellcheck! For now - it's definitely a word.\n\n> Wisdomous - it's definitely a word.\n\n### Working with Code\n\nGot a streak of geek? We've got you covered there, too. You can write inline `<code>` blocks really easily with back ticks. Want to show off something more comprehensive? 4 spaces of indentation gets you there.\n\n    .awesome-thing {\n        display: block;\n        width: 100%;\n    }\n\n### Ready for a Break? \n\nThrow 3 or more dashes down on any new line and you've got yourself a fancy new divider. Aw yeah.\n\n---\n\n### Advanced Usage\n\nThere's one fantastic secret about Markdown. If you want, you can  write plain old HTML and it'll still work! Very flexible.\n\n<input type=\"text\" placeholder=\"I'm an input field!\" />\n\nThat should be enough to get you started. Have fun - and let us know what you think :)",
//   "html": "<p>You're live! Nice. We've put together a little post to introduce you to the Ghost editor and get you started. You can manage your content by signing in to the admin area at <code>&lt;your blog URL&gt;/ghost/</code>. When you arrive, you can select this post from a list on the left and see a preview of it on the right. Click the little pencil icon at the top of the preview to edit this post and read the next section!</p>\n\n<h2 id=\"gettingstarted\">Getting Started</h2>\n\n<p>Ghost uses something called Markdown for writing. Essentially, it's a shorthand way to manage your post formatting as you write!</p>\n\n<p>Writing in Markdown is really easy. In the left hand panel of Ghost, you simply write as you normally would. Where appropriate, you can use <em>shortcuts</em> to <strong>style</strong> your content. For example, a list:</p>\n\n<ul>\n<li>Item number one</li>\n<li>Item number two\n<ul><li>A nested item</li></ul></li>\n<li>A final item</li>\n</ul>\n\n<p>or with numbers!</p>\n\n<ol>\n<li>Remember to buy some milk  </li>\n<li>Drink the milk  </li>\n<li>Tweet that I remembered to buy the milk, and drank it</li>\n</ol>\n\n<h3 id=\"links\">Links</h3>\n\n<p>Want to link to a source? No problem. If you paste in url, like <a href='http://ghost.org'>http://ghost.org</a> - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to <a href=\"http://ghost.org\">the Ghost website</a>. Neat.</p>\n\n<h3 id=\"whataboutimages\">What about Images?</h3>\n\n<p>Images work too! Already know the URL of the image you want to include in your article? Simply paste it in like this to make it show up:</p>\n\n<p><img src=\"https://ghost.org/images/ghost.png\" alt=\"The Ghost Logo\" /></p>\n\n<p>Not sure which image you want to use yet? That's ok too. Leave yourself a descriptive placeholder and keep writing. Come back later and drag and drop the image in to upload:</p>\n\n<h3 id=\"quoting\">Quoting</h3>\n\n<p>Sometimes a link isn't enough, you want to quote someone on what they've said. It was probably very wisdomous. Is wisdomous a word? Find out in a future release when we introduce spellcheck! For now - it's definitely a word.</p>\n\n<blockquote>\n  <p>Wisdomous - it's definitely a word.</p>\n</blockquote>\n\n<h3 id=\"workingwithcode\">Working with Code</h3>\n\n<p>Got a streak of geek? We've got you covered there, too. You can write inline <code>&lt;code&gt;</code> blocks really easily with back ticks. Want to show off something more comprehensive? 4 spaces of indentation gets you there.</p>\n\n<pre><code>.awesome-thing {\n    display: block;\n    width: 100%;\n}\n</code></pre>\n\n<h3 id=\"readyforabreak\">Ready for a Break?</h3>\n\n<p>Throw 3 or more dashes down on any new line and you've got yourself a fancy new divider. Aw yeah.</p>\n\n<hr />\n\n<h3 id=\"advancedusage\">Advanced Usage</h3>\n\n<p>There's one fantastic secret about Markdown. If you want, you can  write plain old HTML and it'll still work! Very flexible.</p>\n\n<p><input type=\"text\" placeholder=\"I'm an input field!\" /></p>\n\n<p>That should be enough to get you started. Have fun - and let us know what you think :)</p>",
//   "image": null,
//   "featured": 0,
//   "page": 0,
//   "status": "published",
//   "language": "en_US",
//   "meta_title": null,
//   "meta_description": null,
//   "author_id": 1,
//   "created_at": 1389625011754,
//   "created_by": 1,
//   "updated_at": 1389625011754,
//   "updated_by": 1,
//   "published_at": 1389625011762,
//   "published_by": 1
