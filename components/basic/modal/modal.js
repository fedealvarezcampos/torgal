import { DialogOverlay, DialogContent } from '@reach/dialog';
import useCheckMobile from '../../../helpers/useCheckMobile';
import '@reach/dialog/styles.css';
import s from './modal.module.css';

export const Modal = ({ children, isOpen, close }) => {
	const mobile = useCheckMobile();

	return (
		<>
			<DialogOverlay className={s['modal-bg']} isOpen={isOpen} onDismiss={close}>
				<DialogContent aria-label="modal opened" className={s.modal}>
					{mobile && <span className={s['mobile-exit']} onClick={() => close()} />}
					{children}
				</DialogContent>
			</DialogOverlay>
		</>
	);
};
