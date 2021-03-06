//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("veinteractive.containertag.v1.Tag", {
	config: {
		/*DATA*/
		name: "Container Tag",
		async: true,
		description: "Tag to be placed on all pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "VE Interactive ID",
			description: "The ID for the tag in this format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX with dashes included",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var scriptPath = this.valueForToken("id").split("-").join("/");
		var scriptURL = "//config1.veinteractive.com/tags/" + scriptPath + "/tag.js";
		var script = document.createElement("script");

		script.src = scriptURL;
		document.getElementsByTagName("head")[0].appendChild(script);
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});