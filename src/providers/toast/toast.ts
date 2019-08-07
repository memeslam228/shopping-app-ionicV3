import {Injectable} from '@angular/core';
import {ToastController} from "ionic-angular";

@Injectable()

export class ToastProvider {

    constructor(private toastCtrl: ToastController) {}

    private cartMsg: string = 'Item is added to favourite';
    private favMsg: string = 'Item is added to cart';

     toastSuccess(key: string) {
        let massage: string;
         massage = key === 'cart' ? this.cartMsg : this.favMsg;
         const toast = this.toastCtrl.create({
            message: massage,
            duration: 1500,
            position: 'top',
            cssClass: 'toast-success',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    }

     toastProblem() {
        const toast = this.toastCtrl.create({
            message: 'This item was added before',
            duration: 1500,
            position: 'top',
            cssClass: 'toast-alert',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    }

    toastUpdate() {
        const toast = this.toastCtrl.create({
            message: 'This item was updated',
            duration: 1500,
            position: 'top',
            cssClass: 'toast-alert',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    }

     toastDeleted() {
        const toast = this.toastCtrl.create({
            message: 'This item is successfully deleted',
            duration: 1500,
            position: 'top',
            cssClass: 'toast-info',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    }

     toastAllDeleted() {
        const toast = this.toastCtrl.create({
            message: 'All items are successfully deleted',
            duration: 1500,
            position: 'top',
            cssClass: 'toast-info',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    }

}
