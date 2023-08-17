import Excel from '@/components/excel/Excel'
import Header from '@/components/header/Header'
import Toolbar from '@/components/toolbar/toolbar'
import formula from '@/components/formula/Formula'
import Table from '@/components/table/Table'
import './scss/index.scss'

const excel = new Excel('#app', {
    components: [Header, Toolbar, formula, Table]
})

excel.render();