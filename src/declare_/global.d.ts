import type { DialogApiInjection } from "naive-ui/es/dialog/src/DialogProvider";
import type { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";

declare global{
    interface Window{
        $message:MessageApiInjection;
        $dialog:DialogApiInjection;
    }
}

declare const window: any;