const formatCurrency = new Intl.NumberFormat("en", { style: "currency", currency: "EUR" });

function text(value) {
  return value === null || value === undefined || value === "" ? "Not available" : String(value);
}

function el(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.textContent = content;
  return node;
}

function card(title, rows = []) {
  const node = el("article", "card");
  node.append(el("h3", "", title));
  for (const [label, value] of rows) {
    const row = el("div", "row");
    row.append(el("span", "", label), el("strong", "", value));
    node.append(row);
  }
  return node;
}

async function main() {
  const response = await fetch("/demo/fixture.json", { cache: "no-store" });
  const fixture = await response.json();
  document.querySelector("#client-name").textContent = fixture.client.display_name;
  const providerGrid = document.querySelector("#provider-grid");
  for (const provider of fixture.providers) {
    providerGrid.append(card(provider.provider.replace(/_/g, " "), [
      ["Status", text(provider.status)],
      ["Collection", text(provider.collection_status)]
    ]));
  }
  const resultsGrid = document.querySelector("#results-grid");
  for (const channel of fixture.results_summary.channels) {
    resultsGrid.append(card(channel.channel.replace(/_/g, " "), [
      ["Spend", formatCurrency.format(channel.spend || 0)],
      ["Conversions", text(channel.conversions)],
      ["CPL", channel.cpl === null ? "Not available" : formatCurrency.format(channel.cpl)],
      ["Coverage", text(channel.coverage_status)]
    ]));
  }
  const benchmarks = document.querySelector("#benchmarks-body");
  benchmarks.append(card("Benchmark readiness", [
    ["Status", fixture.benchmarks.status],
    ["Window", fixture.benchmarks.primary_window],
    ["Note", fixture.benchmarks.notes.join(" ")]
  ]));
  const changes = document.querySelector("#changes-list");
  for (const item of fixture.weekly_changes) {
    changes.append(card(item.action_type.replace(/_/g, " "), [
      ["Source", item.source],
      ["Channel", item.channel],
      ["Impact", item.impact_status],
      ["Summary", item.summary]
    ]));
  }
}

main().catch(() => {
  document.querySelector("#client-name").textContent = "Demo unavailable";
});
