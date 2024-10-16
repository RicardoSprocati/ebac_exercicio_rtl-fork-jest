import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar 2 comentarios', () => {
        const { debug } = render(<PostComment/>);
        

        const textArea = screen.getByRole("textbox");
        fireEvent.change(textArea, {
            target: {value: "primeiro comentario"}
        });

        const button = screen.getByTestId("btn-comentar")
        fireEvent.click(button);

        expect(screen.getByText("primeiro comentario")).toBeInTheDocument();

        fireEvent.change(textArea, {
            target: {value: "segundo comentario"}
        });
        fireEvent.click(button);

        expect(screen.getByText("segundo comentario")).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-debugging-utils
        debug();
        
    });
});