#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main()
{
    ll n,x;    cin>>n>>x;
    vector<int> coins(n);   
    for(int i=0; i<n; i++)  { cin>>coins[i]; }
    
    vector<vector<int>> dp(n+1,vector<int>(x+1));
    // int dp[n+1][x+1];
    // dp[0][0]=1;
    for(int i=1; i<n+1; i++) dp[i][0]=1;
    
    for(int i=1; i<n+1; i++){
        for(int j=0; j<x+1; j++){
            if(j==0)    dp[i][j]=1;
            else{
                int a = j-coins[i-1]<0 ? 0:dp[i][j-coins[i-1]];
                int b = i-1<=0          ? 0:dp[i-1][j];
                dp[i][j] = (a+b)%1000000007;
            }
        }
    }
    cout<<dp[n][x]<<endl;
    
    return 0;
}