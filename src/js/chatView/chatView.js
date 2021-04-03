import $ from 'jquery';
export class ChatView {
    constructor(config) {
        this.config = config;
        this.$textOfCommentInput = $('.js-input-text');
        this.$currentUserNameInput = $('.js-input-name');
        this.$commentsList = $('.js-comments-list');
        // this.init()
        $('.js-comment-button').click(() => {
            const message = this.$textOfCommentInput[0].value
            const author = this.$currentUserNameInput[0].value + ':';
            this.config.send(author, message);
        });
    }

    generateNewElement(author, message) {
        this.$commentsList.prepend(this.createComment(author, message));
        this.resetTemporaryStorege();
    }

    createComment(author, message) {
        return `<li class="list-group-item js-item"><span class="js-text"><span class="js-answered-users">${author}</span>${message}</span></li>`
    }

    resetTemporaryStorege() {
        this.$textOfCommentInput[0].value = "";
    }
}