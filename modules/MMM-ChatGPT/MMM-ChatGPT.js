// MMM-ChatGPT.js

Module.register("MMM-ChatGPT", {
	// Default module config.
	defaults: {
		updateInterval: 30 * 1000
	},

	start: function () {
		Log.info("Loading Chat GPT");
		this.getTextCompletion("Say something random");
		this.scheduleUpdate();
	},

	getStyles: function () {
		return [this.file("css/mmm-style.css")];
	},

	chatGPTText: null,
	getDom: function () {
		const wrapper = document.createElement("div");
		if (this.chatGPTText === null) return wrapper;
		this.setupHTMLStructure(wrapper);
		return wrapper;
	},

	setupHTMLStructure(wrapper) {
		const chatGPTText = document.createElement("h1");
		chatGPTText.className = "bright medium light fadeInChatGPTText";
		chatGPTText.innerHTML = this.chatGPTText.choices[0].text;
		wrapper.appendChild(chatGPTText);
	},

	getTextCompletion: function (random_string) {
		console.log(this.name + ": getting chat response...");
		this.sendSocketNotification("GET_PROMPT_RESULTS", random_string);
	},

	scheduleUpdate: function () {
		setInterval(() => {
			this.getTextCompletion();
		}, this.config.updateInterval);
	},

	socketNotificationReceived: function (notification, payload) {
		if (notification === "PROMPT_RESULTS") {
			this.chatGPTText = payload;
			this.loaded = true;
			console.log(this.name + ": response received: " + payload.length);
			this.updateDom();
		} else if (notification === "SPEECH") {
			this.getTextCompletion(payload);
		}
	}
});

//TOKEN: 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
