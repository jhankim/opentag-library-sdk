//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"sojern.datapartnertaghotelrentalcarsearch.v1.Tag", {
		config: {
			/*DATA*/
			name: "Data Partner Tag - Hotel + Rental Car Search",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Sojern Partner Key",
				description: "Sojern Partner Key",
				token: "sojern_partner_key",
				uv: ""
			}, {
				name: "Number of Travellers",
				description: "Blank string if not available",
				token: "number_of_travellers",
				uv: ""
			}, {
				name: "Number of Rooms",
				description: "Blank string if not available",
				token: "number_of_rooms",
				uv: ""
			}, {
				name: "Check-In Date",
				description: "yyyy-mm-dd (Blank string if not available)",
				token: "checkin_date",
				uv: ""
			}, {
				name: "Check-Out Date",
				description: "yyyy-mm-dd (Blank string if not available)",
				token: "checkout_date",
				uv: ""
			}, {
				name: "City",
				description: "Blank string if not available",
				token: "city",
				uv: ""
			}, {
				name: "State",
				description: "2-letter postcode (Blank string if not available)",
				token: "state",
				uv: ""
			}, {
				name: "Country",
				description: "2-letter code (Blank string if not available)",
				token: "country",
				uv: ""
			}, {
				name: "Closest Airport to Search Location",
				description: "Blank string if not available",
				token: "airport_to_hotel",
				uv: ""
			}, {
				name: "Closest Airport to Car Pick-Up Location",
				description: "Blank string if not available",
				token: "airport_to_pickup",
				uv: ""
			}, {
				name: "Car Pick-Up City",
				description: "Blank string if not available",
				token: "pickup_city",
				uv: ""
			}, {
				name: "Car Pick-Up Date",
				description: "yyyy-mm-dd (Blank string if not available)",
				token: "pickup_date",
				uv: ""
			}, {
				name: "Closest Airport to Drop-Off Location",
				description: "Blank string if not available",
				token: "airport_to_dropoff",
				uv: ""
			}, {
				name: "Car Drop-Off City",
				description: "Blank string if not available",
				token: "dropoff_city",
				uv: ""
			}, {
				name: "Car Drop-Off Date",
				description: "yyyy-mm-dd (Blank string if not available)",
				token: "dropoff_date",
				uv: ""
			}, {
				name: "Class of Car",
				description: "Blank string if not available",
				token: "car_class",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			var src = document.location.protocol + "//pixel.sojern.com/partner/" +
				this.valueForToken("sojern_partner_key") + "/hs?";
			src += "t=" + this.valueForToken("number_of_travellers") + "&";
			src += "hr=" + this.valueForToken("number_of_rooms") + "&";
			src += "hd1=" + this.valueForToken("checkin_date") + "&";
			src += "hd2=" + this.valueForToken("checkout_date") + "&";
			src += "hc1=" + this.valueForToken("city") + "&";
			src += "hs1=" + this.valueForToken("state") + "&";
			src += "hn1=" + this.valueForToken("country") + "&";
			src += "ha1=" + this.valueForToken("airport_to_hotel") + "&";
			src += "ra1=" + this.valueForToken("airport_to_pickup") + "&";
			src += "rc1=" + this.valueForToken("pickup_city") + "&";
			src += "rd1=" + this.valueForToken("pickup_date") + "&";
			src += "ra2=" + this.valueForToken("airport_to_dropoff") + "&";
			src += "rc2=" + this.valueForToken("dropoff_city") + "&";
			src += "rd2=" + this.valueForToken("dropoff_date") + "&";
			src += "rc=" + this.valueForToken("car_class");
			(new Image()).src = src;
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