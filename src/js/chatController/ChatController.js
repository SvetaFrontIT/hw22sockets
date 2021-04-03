import $ from 'jquery';
import { GeneralView } from '../chatView/generalView.js'
import { ChatView } from '../chatView/chatView.js'
import { ChatModel } from '../chatModel/ChatModel.js'

export class ChatController {
    constructor() {
        this.generalView = new GeneralView();
        this.init();
        const $app = $('.container')
        this.chatView = new ChatView({
            $container: $app,
            send: (author, text) => this.send(author, text)
        });
        this.chatModel = new ChatModel({
            renderNewMessage: (event) => this.renderNewMessage(event)
        });
    }
    init() {
        this.generalView.createContainer()
    }

    send(author, text) {
        this.chatModel.sending(author, text)
    }
    renderNewMessage(event) {
        const message = JSON.parse(event.data);
        const historyMessage = {
            author: message.author,
            text: message.text
        };
        this.chatModel.saveHistory(historyMessage);
        this.chatView.generateNewElement(message.author, message.text);
    }

}