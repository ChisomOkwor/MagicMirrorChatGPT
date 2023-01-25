/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					},
					// ICloud Reminder
                			{
                        			url: 'http://localhost:8080/modules/calendars/HERE-GOES-THE-UUID-OF-THE-CALENDAR-YOU-WANT-TO-SYNC.ics',
                        			symbol: 'calendar'
               		 		}			
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				apiBase: "https://api.openweathermap.org/data/",
				weatherEndpoint: "/weather",
				location: "Seattle, United States",
				locationID: "5809844",
				apiKey: "320dfa358db1955374bd2c29cc7b8009"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				apiBase: "https://api.openweathermap.org/data/",
				weatherEndpoint: "/forecast",
				location: "Seattle",
				initialLoadDelay: "100",
				locationID: "5809844",
                		apiVersion: "2.5",
				apiKey: "320dfa358db1955374bd2c29cc7b8009"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},

		{
		  module: "MMM-Face-Recognition-SMAI",
		  position: "top_right",
		  config: {
		    	prompt: "Hello..."
		  }
		  
		  
		},

		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "bottom_left",

		  config: {
		    	clientID: "660b5426aff846378f13394300885d28",
		   	 clientSecret: "4532050f87e94b58935fb79e25b68b51",
		    	accessToken: "BQDUd5OqbovG_VG83bklB9dpza5U8hsnGya4kC1-lBOplburKFZjFxMkdOCd34wNu1BR87oGxfcv2fZFRf05dyQ3SC2cS4D7zLZ2U2x0mGABcm39k8ix-qIU0Ui8eUrzyOArez7rFmhloSYz_uLIR49iP_wjVwwm2mBgPGJMLkhQOU-z9CKyG729oDzfWUaSlK_17MTcqTlK_g",
		    	refreshToken: "AQAOd6LvB6k5CYGLHblxZz5kx_gQL4C3Ahci0PLUaXYPOppdTYgL_SvioIe3igBIddrisAQ798SKPQeizaOKQmJq34riVvEehVWFJOaJ5rPYfWtBJPJlzUUKPPs36TgevLg"
			},
		},
		{
        	module: 'MMM-Hello-Mirror',
        	position: 'lower_third',
        	config: {
            		laguage: "en"
        		}
   		 },
		{
		module: 'MMM-ChatGPT',
		position: 'middle_center'
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
