// import { useStore } from '@nuxtjs/composition-api';
import { Email } from './smtp.js';
// console.log('Email: ', Email);

export default async function foo(data) {
	const { name, phone, title } = data;

	if (!name || !phone) {
		return new Error('не удалось отправить форму');
	}

	//* google
	const response = await Email.send({
		Host: 'smtp.google.com',
		// Host: 'smtp.fgsgsg.com',
		Username: 'prostoleo.dev@gmail.com', // google
		Password: 'ughfxwkqflveychr', // google
		// Username: 'zz@gmail.com', // google
		// Password: '123', // google
		To: 'prostoleo.dev@gmail.com',
		From: 'prostoleo.dev@gmail.com',
		Subject: `${name} отправил Вам сообщение`,
		Body: `Имя: ${name} <br /> Телефон: ${phone} <br /> Тема: ${
			title ?? 'не удалось узнать тему'
		}`,
	});

	return response;
}
