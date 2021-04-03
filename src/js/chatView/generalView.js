import $ from 'jquery';

export class GeneralView {
    createContainer() {
        const $main = $('.main');
        return $main.prepend(`<div class="container">
        <div class="card">
            <ul class="list-group list-group-flush js-comments-list">
            </ul>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control js-input-name" placeholder="Current user name" onsubmit="event.preventDefault()" aria-label="Recipient's username" aria-describedby="button-addon2">
            <input type="text" class="form-control js-input-text" name='text' placeholder="Comment" onsubmit="event.preventDefault()" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary js-comment-button" type="button" id="button-addon2">SEND</button>
        </div>
    </div>`)

    }


}