import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import s from './modal.module.css';

export const Modal = ({ children, isOpen, close }) => {
	return (
		<DialogOverlay className={s['modal-bg']} isOpen={isOpen} onDismiss={close}>
			<DialogContent aria-label="modal opened" className={s.modal}>
				{children}
			</DialogContent>
		</DialogOverlay>
	);
};
