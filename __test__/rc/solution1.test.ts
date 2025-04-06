import { describe, it, expect } from 'vitest';
import { solution } from '../../src/rc/solution1';

describe('solution', () => {
  it('should return S when heading is N and angle is 180', () => {
    const result = solution('N', 180);
    expect(result).toBe('S');
  });

  it('should return W when heading is N and angle is -90', () => {
    const result = solution('N', -90);
    expect(result).toBe('W');
  });

  // Additional test cases
  it('should return E when heading is N and angle is 90', () => {
    const result = solution('N', 90);
    expect(result).toBe('E');
  });

  it('should return N when heading is N and angle is 0', () => {
    const result = solution('N', 0);
    expect(result).toBe('N');
  });

  it('should return N when heading is N and angle is 360', () => {
    const result = solution('N', 360);
    expect(result).toBe('N');
  });

  it('should return W when heading is S and angle is 90', () => {
    const result = solution('S', 90);
    expect(result).toBe('W');
  });

  it('should return E when heading is S and angle is -90', () => {
    const result = solution('S', -90);
    expect(result).toBe('E');
  });

  it('should return S when heading is E and angle is 90', () => {
    const result = solution('E', 90);
    expect(result).toBe('S');
  });

  it('should return N when heading is W and angle is 90', () => {
    const result = solution('W', 90);
    expect(result).toBe('N');
  });
});
