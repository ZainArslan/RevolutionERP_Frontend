import { Subject } from 'rxjs';
import { SWALMIXIN } from '../services/mixin.service';

export class Basic_tasks {
    isLoadingGlobal: boolean = false;
    _unsubscribeAll: Subject<void> = new Subject<void>();

    showErrorMessage(message: string) {
        SWALMIXIN.fire({
            icon: 'error',
            title: message,
        });
    }

    showSuccessMessage(message: string) {
        SWALMIXIN.fire({
            icon: 'success',
            title: message,
        });
    }
}
