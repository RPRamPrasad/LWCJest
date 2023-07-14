import { createElement } from 'lwc';
import HelloBinding from 'c/helloBinding';

describe('c-hello-binding', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-hello-binding', {
            is: HelloBinding
        });

        // Act
        document.body.appendChild(element);

        // Assert
         const p = element.shadowRoot.querySelector('p');
        expect(p.textContent).toBe('Hello');
    });
});