import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          {hasRemValue && <th>Pixels</th>}
          {hasRemValue && <th></th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, token]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{token}</td>
            {hasRemValue && <td>{Number(token.replace('rem', '')) * 16}px</td>}
            {hasRemValue && (
              <td>
                <div
                  style={{
                    background: '#333',
                    height: 8,
                    width: Number(token.replace('rem', '')) * 16,
                  }}
                ></div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
