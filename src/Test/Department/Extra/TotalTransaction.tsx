import { useState, useEffect } from "react";
import "./TotalTransaction.css";

type Transaction = {
  id: string;
  agent: string;
  mode: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};

export const TotalTransactions = () => {
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: "TXN101", agent: "Rahul Sharma", mode: "cash", date: "2026-04-12", amount: 1200, status: "pending" },
    { id: "TXN102", agent: "Amit Das", mode: "cash", date: "2026-04-11", amount: 800, status: "pending" },
    { id: "TXN103", agent: "Priya Singh", mode: "cash", date: "2026-04-10", amount: 950, status: "pending" },
  ]);

  const [amountInput, setAmountInput] = useState<Record<string, number | string>>({});

  const handleSubmit = (id: string) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status: "paid",
              amount: Number(amountInput[id]) || t.amount,
            }
          : t
      )
    );
  };

  const filtered = transactions.filter((t) => {
    const matchSearch =
      t.id.toLowerCase().includes(search.toLowerCase()) ||
      t.agent.toLowerCase().includes(search.toLowerCase());

    const matchDate = date ? t.date === date : true;

    return matchSearch && matchDate;
  });

  return (
    <div className="tx-container">
      <div className="tx-header">
        <h2 className="tx-title">Transactions</h2>
      </div>

      <div className="tx-controls">
        <input
          className="tx-input"
          placeholder="Search ID / Agent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className="tx-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* DESKTOP */}
      {!isMobile && (
        <div className="tx-table-wrapper">
          <table className="tx-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Agent</th>
                <th>Mode</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Deposit</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.agent}</td>
                  <td>{t.mode}</td>
                  <td>{t.date}</td>

                  <td>
                    <span className={`tx-status ${t.status}`}>
                      {t.status}
                    </span>
                  </td>

                  <td>₹{t.amount}</td>

                  <td className="tx-td">
                    {t.status === "pending" || editingId === t.id ? (
                      <div className="tx-deposit">
                        <input
                          className="tx-input"
                          type="number"
                          value={amountInput[t.id] ?? t.amount}
                          onChange={(e) =>
                            setAmountInput({
                              ...amountInput,
                              [t.id]: e.target.value,
                            })
                          }
                        />
                        <button
                          className="tx-btn tx-btn-primary"
                          disabled={!amountInput[t.id]}
                          onClick={() => {
                            handleSubmit(t.id);
                            setEditingId(null);
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    ) : (
                      <div className="tx-deposit">
                        <span>₹{t.amount}</span>
                        <button
                          className="tx-btn tx-btn-secondary"
                          onClick={() => setEditingId(t.id)}
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* MOBILE */}
      {isMobile && (
        <div className="tx-cards">
          {filtered.map((t) => (
            <div key={t.id} className="tx-card">
              <div className="tx-card-row">
                <span>{t.id}</span>
                <span className={`tx-status ${t.status}`}>
                  {t.status}
                </span>
              </div>

              <div className="tx-card-body">
                <p>{t.agent}</p>
                <p>{t.date}</p>
                <p>₹{t.amount}</p>
              </div>

              {t.status === "pending" || editingId === t.id ? (
                <div className="tx-card-action">
                  <input
                    className="tx-input"
                    type="number"
                    value={amountInput[t.id] ?? t.amount}
                    onChange={(e) =>
                      setAmountInput({
                        ...amountInput,
                        [t.id]: e.target.value,
                      })
                    }
                  />
                  <button
                    className="tx-btn tx-btn-primary"
                    disabled={!amountInput[t.id]}
                    onClick={() => {
                      handleSubmit(t.id);
                      setEditingId(null);
                    }}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className="tx-card-action">
                  <span>₹{t.amount}</span>
                  <button
                    className="tx-btn tx-btn-secondary"
                    onClick={() => setEditingId(t.id)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};