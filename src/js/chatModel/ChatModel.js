export class ChatModel {
    constructor(config) {
        this.config = config;
        this.chatHistory = [];
    }

    saveHistory(message) {
        this.chatHistory = [...this.chatHistory, message]
    }
    sending(author, text) {
        const message = {
            type: 'SEND_MESSAGE',
            text: text,
            author: author,
        };
        const json = JSON.stringify(message);
        const socket = new WebSocket('ws://localhost:5555');
        socket.onopen = (event) => {
            socket.send(json);
        };
        socket.onmessage = (event) => {
            this.config.renderNewMessage(event);
            socket.close();
        };
        socket.onerror = (event) => {
            console.log('onerror', event);
        };
    }
}