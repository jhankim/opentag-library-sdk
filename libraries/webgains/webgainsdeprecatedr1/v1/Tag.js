//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("webgains.webgainsdeprecatedr1.v1.Tag", {
	config: {
		/*DATA*/
		name: "WebGains [DEPRECATED] R1",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var _this = this;
		var wgItems = function() {
			var wgItemsString = "";
			for (var i = 0; i < _this.valueForToken("unit_prices").length; i++) {
				wgItemsString = wgItemsString + "" +
						this.valueForToken("event_id") + "::" +
					this.valueForToken("unit_prices")[i] + "::" +
					this.valueForToken("unit_names")[i] + "::" +
				  this.valueForToken("product_id_list")[i] + "::" +
					this.valueForToken("transaction_voucher");
				if (_this.valueForToken("unit_prices").length !== 1 &&
						i < _this.valueForToken("unit_prices").length - 1) {
					wgItemsString = wgItemsString + "|";
				}
			}
			return wgItemsString;
		};

		if (location.protocol.toLowerCase() == "https:") wgProtocol = "https";
		else wgProtocol = "http";

		wgUri = "//" + this.valueForToken("subdomain") +
			".webgains.com/transaction.html?";
		wgUri += "wgver=" + this.valueForToken("code_version") + "&wgprotocol=";
		wgUri += wgProtocol + "&wgsubdomain=" + 
				this.valueForToken("subdomain");
		wgUri += "&wgslang=" + 
				this.valueForToken("script_language") + "&wglang=" +
				this.valueForToken("language");
		wgUri += "&wgprogramid=" + 
				this.valueForToken("merchant_id") + "&wgeventid=" +
				this.valueForToken("event_id");
		wgUri += "&wgvalue=" + 
				this.valueForToken("order_total") + "&wgchecksum=" +
				this.valueForToken("checksum");
		wgUri += "&wgorderreference=" + this.valueForToken("order_id");
		wgUri += "&wgcomment=" + escape("" + this.valueForToken("merchant_comment"));
		wgUri += "&wglocation=" + escape(document.referrer);
		wgUri += "&wgitems=" + escape(wgItems());
		wgUri += "&wgcustomerid=" + escape("" + this.valueForToken("customer_id"));
		wgUri += "&wgvouchercode=" + escape("" + this.valueForToken("transaction_voucher"));
		wgUri += "&wgCurrency=" + escape("" + this.valueForToken("transaction_currency"));

		var webGainsScript = document.createElement('script');
		webGainsScript.id = "webgains-script";
		webGainsScript.type = "text/javascript";
		webGainsScript.src = wgUri;

		document.body.appendChild(webGainsScript);
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