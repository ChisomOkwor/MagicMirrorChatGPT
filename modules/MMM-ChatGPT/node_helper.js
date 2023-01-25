/* Magic Mirror
 * Module: MMM-ChatGPT
 *
 * MIT Licensed
 */
const NodeHelper = require("node_helper");
const fetch = require("node-fetch");

module.exports = NodeHelper.create({
	start: function () {
		console.log("Starting node_helper for: MMM-ChatGPT");
	},

	getTextCompletion: function (random_string) {
		fetch(`https://api.openai.com/v1/completions`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer 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"
			},
			body: JSON.stringify({
				model: "text-davinci-003",
				prompt: `${random_string}`,
				temperature: 0,
				max_tokens: 30
			})
		}).then((response) => {
			response.json().then((data) => {
				//console.log(data);
				this.sendSocketNotification("PROMPT_RESULTS", data);
			});
		}),
			(error) => {
				console.error(this.name + " ERROR:", error);
			};
	},

	socketNotificationReceived: function (notification, random_string) {
		if (notification === "GET_PROMPT_RESULTS") {
			console.log("MMM-ChatGPT: in helper. Getting prompt results...");
			this.getTextCompletion(random_string);
		}
	}
});
