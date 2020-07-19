import buildModuleTypes from 'src/helpers/store'

const moduleName = 'name'
const HOGE_TYPES = {
  HOGE: 'HOGE',
  FUGA: 'FUGA'
}

describe('buildModuleTypes', () => {
  it('ネームスペースとオブジェクトを渡すと、ネームスペースを付与した形でマッピングする', () => {
    const TEST_TARGET = buildModuleTypes({
      moduleName,
      types: HOGE_TYPES
    })

    expect(TEST_TARGET).toStrictEqual({
      HOGE: 'name/HOGE',
      FUGA: 'name/FUGA'
    })
  })
})
