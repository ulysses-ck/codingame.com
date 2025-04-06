import { describe, it, expect } from 'vitest';
import { solution } from '../../src/fc/solution1';

describe('Coordinate Movement Tests', () => {
  it('should handle NORTH movement', () => {
    expect(solution('N')).toBe('(0,1)');
  });

  it('should handle SOUTH-EAST movement', () => {
    expect(solution('SE')).toBe('(1,-1)');
  });

  it('should handle no movement (CURRENT)', () => {
    expect(solution('')).toBe('(0,0)');
  });

  it('should handle SOUTH-WEST movement', () => {
    expect(solution('SW')).toBe('(-1,-1)');
  });

  it('should handle NORTH-WEST movement', () => {
    expect(solution('NW')).toBe('(-1,1)');
  });

  it('should handle NORTH-EAST movement', () => {
    expect(solution('NE')).toBe('(1,1)');
  });

  it('should handle SOUTH movement', () => {
    expect(solution('S')).toBe('(0,-1)');
  });

  // Additional test cases for complex movements
  it('should handle multiple movements in sequence', () => {
    expect(solution('NSEW')).toBe('(0,0)');
  });

  it('should handle repeated movements', () => {
    expect(solution('NNN')).toBe('(0,3)');
  });
});
