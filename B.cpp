#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main()
{
    ll n,x;    cin>>n>>x;
    vector<int> coins(n);   
    for(int i=0; i<n; i++)  { cin>>coins[i]; }
    
    int dp[n+1][x+1];
    for(int i=0; i<n+1; i++)    dp[i][0]=1;
    for(int i=1; i<x+1; i++)    dp[0][i]=0;  
    
    for(int i=1; i<n+1; i++){
        for(int j=1; j<x+1; j++){
            int a = j-coins[i-1]<0 ? 0:dp[i][j-coins[i-1]];
            int b = i-1<0          ? 0:dp[i-1][j];
            dp[i][j] = (a+b)%1000000007;
        }
    }
    cout<<dp[n][x]<<endl;
    
    return 0;
}