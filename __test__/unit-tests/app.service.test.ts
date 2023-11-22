import { AppService } from '../../src/app.service';

describe('getHello', () => {
    it('should return hello world', () => {
        // Arrange
        const service = new AppService();

        // Act
        const result = service.getHello();

        // Assert
        expect(result).toBe('Hello World!');
    });
});
