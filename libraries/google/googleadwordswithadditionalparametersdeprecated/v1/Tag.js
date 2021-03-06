//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"google.googleadwordswithadditionalparametersdeprecated.v1.Tag", {
		config: {
			/*DATA*/
			name: "Google AdWords with additional parameters DEPRECATED",
			async: true,
			description: "Tracks users that have converted who previously clicked through on an ad.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Conversion ID",
				description: "",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Conversion Label",
				description: "",
				token: "conversion_label",
				uv: ""
			}, {
				name: "Conversion Format",
				description: "",
				token: "conversion_format",
				uv: ""
			}, {
				name: "Conversion Color",
				description: "",
				token: "conversion_color",
				uv: ""
			}, {
				name: "Conversion Language",
				description: "",
				token: "conversion_language",
				uv: ""
			}, {
				name: "Conversion Value",
				description: "",
				token: "conversion_value",
				uv: "universal_variable.transaction.subtotal"
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			/*~SCRIPT*/
		},
		pre: function() {
			/*PRE*/
			/*~PRE*/
		},
		post: function() {
			/*POST*/
			window.google_trackConversion({
				google_conversion_id: this.valueForToken("conversion_id"),
				google_conversion_label: "" + this.valueForToken("conversion_label"),
				google_conversion_format: "" + this.valueForToken("conversion_format"),
				google_conversion_color: "" + this.valueForToken("conversion_color"),
				google_conversion_language: "" + this.valueForToken("conversion_language"),
				google_conversion_value: this.valueForToken("conversion_value")
			});
			/*~POST*/
		}
	});