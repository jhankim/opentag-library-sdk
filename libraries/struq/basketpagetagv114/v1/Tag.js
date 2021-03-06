//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.basketpagetagv114.v1.Tag", {
	config: {
		/*DATA*/
		name: "Basket Page Tag v1.14",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Struq Basket Page Pixel ID",
			description: "",
			token: "pixelid",
			uv: ""
		}, {
			name: "Struq Product List",
			description: "",
			token: "products",
			uv: "universal_variable.basket.line_items[#].product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var productArr = [];
		for (var i = 0, ii = this.valueForToken("products").length; i < ii; i++) {
			productArr.push(this.valueForToken("products")[i]);
		}
		var productStr = productArr.join(",");

		window._struqPI = window._struqPI || [];
		window._struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("pixelid"),
			route: '/s/sa/',
			collectData: false,
			data: [{
				title: "si",
				pid: productStr
			}],
			options: {
				timeoutMs: 2000,
				firstPartyDomain: '',
				firstPartyCookie: '',
				firstPartyUid: ''
			}
		}]);

		var struq = document.createElement('script');
		struq.type = 'text/javascript';
		struq.async = true;
		struq.src = ('https:' == document.location.protocol ? 'https://' :
			'http://') +
			'media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-14.js';
		document.getElementsByTagName('head')[0].appendChild(struq);
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