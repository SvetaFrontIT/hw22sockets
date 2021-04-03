import { ChatController } from './chatController/ChatController.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

$(() => {
    const controller = new ChatController();
});