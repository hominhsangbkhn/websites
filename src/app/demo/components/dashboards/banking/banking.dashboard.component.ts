import { Component, OnDestroy, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

interface MonthlyPayment {
    name?: string;
    amount?: number;
    paid?: boolean;
    date?: string;
}

@Component({
	templateUrl: './banking.dashboard.component.html'
})
export class BankingDashboardComponent implements OnInit, OnDestroy {

	chartData: any;

	chartOptions: any;

    payments: MonthlyPayment[] = [];
    payments2: MonthlyPayment[] = [];

	subscription: Subscription;

    cities: SelectItem[] = [];

    selectedDrop: SelectItem = { value: '' };

	constructor( private layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.initChart();
        });
    }

	ngOnInit() {
		this.initChart();
        this.cities = [
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
        ];
        this.payments = [
            {name: 'Total Prod', amount: 4000, paid: true, date: '06/04/2022'},
            {name: 'QK Prod', amount: 4000, paid: true, date: '07/04/2022'},
            {name: 'Ng Prod', amount: 0, paid: false, date: '12/04/2022'},
        ]

        this.payments2 = [
            {name: 'MODEL', amount: 75.60, paid: true, date: '06/04/2022'},
            {name: 'SERIES', amount: 45.50, paid: true, date: '07/04/2022'},
            ]
	}

	initChart() {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

		this.chartData = {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [
                {
                    label: 'Income',
                    data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
                    fill: false,
                    tension: .4,
                    borderColor: documentStyle.getPropertyValue('--green-500')
                },
                {
                    label: 'Expenses',
                    data: [1200, 5100, 6200, 3300, 2100, 6200, 4500],
                    fill: true,
                    borderColor: '#6366f1',
                    tension: .4,
                    backgroundColor: 'rgba(99,102,220,0.2)'
                }
            ]
        };

		this.chartOptions = {
			animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                },
				tooltip: {
					callbacks: {
						label: function(context: any) {
							let label = context.dataset.label || '';
	
							if (label) {
								label += ': ';
							}

							if (context.parsed.y !== null) {
								label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
							}
							return label;
						}
					}
				}
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
	}

	ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
