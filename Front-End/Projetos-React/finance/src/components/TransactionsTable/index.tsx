import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento Web Site</td>
                        <td className="deposit">R$5.000</td>
                        <td>Desenvolvimento</td>
                        <td>26/08/2023</td>
                    </tr>
                    <tr>
                        <td>Despesas da casa</td>
                        <td className="withdraw">- R$4.500</td>
                        <td>Prolabores</td>
                        <td>11/08/2023</td>
                    </tr>
                    <tr>
                        <td>Receita Mensal de Apps</td>
                        <td className="deposit">R$3.000</td>
                        <td>Desenvolvimento</td>
                        <td>10/08/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}