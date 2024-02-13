import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    const expected = 'someClass cls1 cls2 cls3';
    expect(classNames('someClass', ['cls1', 'cls2', 'cls3'])).toBe(expected);
  });
  test('with additional undefined and mods', () => {
    const expected = 'someClass hovered visible';
    expect(classNames('someClass', [], { hovered: true, visible: true })).toBe(
      expected
    );
  });
  test('with mods', () => {
    const expected = 'someClass cls1 hovered visible';
    expect(
      classNames('someClass', ['cls1'], {
        hovered: true,
        visible: true,
      })
    ).toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'someClass cls1 hovered';
    expect(
      classNames('someClass', ['cls1'], {
        hovered: true,
        visible: false,
      })
    ).toBe(expected);
  });
});
