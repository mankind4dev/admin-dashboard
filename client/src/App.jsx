import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./scenes/dashboard/DashBoard"
import Layout from "./scenes/layout"
import { themeSettings } from "./theme"
import Products from "./scenes/products/Products"
import Customers from "./scenes/customers/Customers"
import Transactions from "./scenes/transaction/Transactions"
import Geography from "./scenes/geography/Geography"
import PrivateRoute from "./components/PrivateRoute"
import Overview from "./scenes/overview/Overview"
import Daily from "./scenes/daily/Daily"
import Monthly from "./scenes/monthly/Monthly"
import BreakDown from "./scenes/breakDown/BreakDown"
import Performance from "./scenes/performance/Performance"
import Admin from "./scenes/admin/Admin"


function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<PrivateRoute />}></Route>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<BreakDown />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/performance" element={<Performance />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
