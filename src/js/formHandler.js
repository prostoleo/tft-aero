import AWN from 'awesome-notifications';
// import '../../assets/css/awesome-notifications/awesome-notifications.css';
import MicroModal from 'micromodal';

const notifier = new AWN({
	labels: {
		success: 'Успешно',
		alert: 'Ошибка',
	},
	durations: {
		success: 5000,
		alert: 5000,
	},
});

export default function formHandler() {
	const MODAL_ID = 'modal-order-certificate';
	const MODAL_FORM_ID = `modal-form`;
	const INPUT_NAME_ID = 'input-name';
	const INPUT_PHONE_ID = 'input-phone';
	const SEND_BTN_ID = 'btn-order-certificate';

	// MicroModal.init();
	// MicroModal.show('');

	const modalForm = document.getElementById(MODAL_FORM_ID);
	// console.log('modalForm: ', modalForm);
	const nameInput = document.getElementById(INPUT_NAME_ID);
	const nameError = document.getElementById('name-error');
	const phoneInput = document.getElementById(INPUT_PHONE_ID);
	const phoneError = document.getElementById('phone-error');
	const sendButton = document.getElementById(SEND_BTN_ID);

	// console.log({ modalForm, nameInput, phoneInput });

	const formInfo = {
		name: {
			touched: false,
			val: '',
			error: false,
		},
		phone: {
			touched: false,
			val: '',
			error: false,
		},
	};

	const data_js = {
		access_token: import.meta.env.VITE_MAIL_KEY,
	};

	function js_onSuccess() {
		console.log('success');
		// remove this to avoid redirect
		// window.location =
		// 	window.location.pathname +
		// 	'?message=Email+Successfully+Sent%21&isError=0';
		MicroModal.close(MODAL_ID);
		notifier.success(
			'Форма успешно отправлена! Мы свяжемся с Вами как можно скорее.',
			{}
		);
		modalForm.reset();
		sendButton.textContent = 'Заказать';
	}

	function js_onError(error) {
		console.log('error');
		// remove this to avoid redirect
		// window.location =
		// 	window.location.pathname + '?message=Email+could+not+be+sent.&isError=1';
		MicroModal.close(MODAL_ID);
		notifier.alert('Упс, что-то пошло не так. Попробуйте позже', {});
		modalForm.reset();
		sendButton.textContent = 'Заказать';
	}

	// var sendButton = document.getElementById('js_send');

	function js_send() {
		console.log(`sending...`);
		sendButton.textContent = 'Отправка...';
		sendButton.disabled = true;
		const request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				js_onSuccess();
			} else if (request.readyState == 4) {
				js_onError(request.response);
			}
		};

		const phone = phoneInput.value;
		const name = nameInput.value.trim();
		data_js['subject'] = 'Отправка формы с TFT Aero сайта';
		data_js['text'] = `Имя: ${name} Телефон:${phone}`;
		const params = toParams(data_js);

		request.open('POST', 'https://postmail.invotes.com/send', true);
		request.setRequestHeader(
			'Content-type',
			'application/x-www-form-urlencoded'
		);

		request.send(params);

		return false;
	}

	// sendButton.onclick = js_send;

	function toParams(data_js) {
		const form_data = [];
		for (const key in data_js) {
			form_data.push(
				encodeURIComponent(key) + '=' + encodeURIComponent(data_js[key])
			);
		}

		return form_data.join('&');
	}

	function submitForm(event) {
		event.preventDefault();

		if (!validateInput(nameInput) || !validateInput(phoneInput)) {
			return;
		}
		/* if (!validateInput(phoneInput)) {
			return;
		} */

		js_send();
	}

	function validateInput(input) {
		if (!input) return;
		const id = input.id;

		switch (id) {
			case 'input-name':
				const name = input.value.trim();

				if (name.length === 0) {
					nameError.classList.remove('hidden');
					return false;
				}

				nameError.classList.add('hidden');

				break;
			case 'input-phone':
				const phone = input.value.trim();

				if (phone.length !== 18) {
					phoneError.classList.remove('hidden');
					return false;
				}
				phoneError.classList.add('hidden');
				break;
		}

		return true;
	}

	[nameInput, phoneInput].forEach((input) =>
		input.addEventListener('focus', (e) => {
			console.log('input - focus: ', input);
			input.nextElementSibling.classList.add('active');
		})
	);
	[nameInput, phoneInput].forEach((input) =>
		input.addEventListener('blur', (e) => {
			console.log('input - blur: ', input);
			console.log('input.value - blur: ', input.value);
			console.log('input.value.length - blur: ', input.value.length);
			if (
				input.value.length === 0 ||
				(input.id === INPUT_PHONE_ID && input.value.length === 3)
			) {
				input.nextElementSibling.classList.remove('active');
			}
		})
	);
	modalForm.addEventListener('submit', submitForm);
}
