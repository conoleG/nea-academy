import {
    AlertDialog,
    // AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function DialogContent() {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
            
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                       
                        className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Read Refund Policy
                    </a>
                  
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Refund Policy</AlertDialogTitle>
                    <AlertDialogDescription>
                       
                        Please note that refund request will be processed if request is received before the start of the course batch being enrolled for. Intending participants can also request to defer their participation to another batch granted that it is requested before the batch enrolled for starts.
                        Every other request for deferment and refunds is at the Academy’s Discretion.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}