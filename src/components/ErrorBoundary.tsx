import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Critical render error', error, info)
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <section className="not-found-page error-boundary-page">
        <div className="not-found-card">
          <span>Ошибка</span>
          <h1>Что-то пошло не так</h1>
          <p>Страница не смогла отобразиться. Вернитесь на главную и попробуйте открыть нужный раздел ещё раз.</p>
          <div className="not-found-actions">
            <Link className="button button--dark" to="/">
              На главную
            </Link>
            <Link className="button button--light" to="/#courses">
              К курсам
            </Link>
          </div>
        </div>
      </section>
    )
  }
}
